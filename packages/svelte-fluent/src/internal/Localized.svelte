<script lang="ts" generics="TagName extends keyof SvelteHTMLElements & string">
	import type { FluentVariable } from '@fluent/bundle';
	import { useSvelteFluent } from './context.svelte.js';
	import type { Snippet } from 'svelte';
	import LocalizedTag from './LocalizedTag.svelte';
	import { ComponentElement, TagElement } from './elements.js';
	import { type Handlers } from '#markup-parser';
	import { getTranslation } from './fluent.js';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import {
		ALLOWED_ELEMENTS,
		COMPONENT_TAG,
		REGEX_OVERLAY,
		REGEX_SELF_CLOSING_COMPONENT_TAG
	} from './definitions.js';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	type ElementConfig = TagElement<string> | ComponentElement<any>;
	type OutputTagOptions = {
		tag: string;
		attributes: Attrs;
		trustedAttributes?: Attrs;
		allowAttributes?: string[];
		children: Snippet;
	};

	type Attrs = Record<string, string>;
	type ContentItem =
		| string
		| {
				tag: string;
				attributes: Attrs;
				config?: ElementConfig;
				content: Content;
		  };
	type Content = ContentItem[];

	type TagAttrs = SvelteHTMLElements[TagName];
	type TagOptions = { allowAttributes?: string[] };

	const fluent = useSvelteFluent();

	interface Props {
		id: string;
		args?: Record<string, FluentVariable>;
		tag?: TagName | [TagName, TagAttrs?, TagOptions?];
		elements?: Record<string, ElementConfig>;
		outputTag?: Snippet<[OutputTagOptions]>;
		lead?: Snippet;
		trail?: Snippet;
	}

	let {
		id,
		args,
		tag: tagProp,
		elements: elementsProp = {},
		outputTag = defaultOutputTag,
		lead,
		trail
	}: Props = $props();

	let translation = $derived(getTranslation(fluent.current, id, args, true));
	let elementConfigs = $derived(new Map(Object.entries(elementsProp)));
	let [tag, tagAttributes, tagOptions] = Array.isArray(tagProp) ? tagProp : [tagProp ?? 'span'];

	function validateElement(
		tag: string,
		name: string | null,
		config: ElementConfig | undefined
	): boolean {
		if (!ALLOWED_ELEMENTS.includes(tag) && !name) {
			fluent.current.onError(
				`An element of forbidden type "${tag}" was found in the translation. ` +
					'Only safe text-level elements and elements with "data-element" attribute are allowed.'
			);
			return false;
		}
		if (name && !config) {
			fluent.current.onError(`An element named "${name}" wasn't found in the configuration.`);
			return false;
		}
		if (tag === COMPONENT_TAG && (!name || !(config instanceof ComponentElement))) {
			fluent.current.onError(
				`The "${COMPONENT_TAG}" tag must reference a component element with "data-element".`
			);
			return false;
		}
		if (tag !== COMPONENT_TAG && config instanceof ComponentElement) {
			fluent.current.onError(
				`A component element named "${name}" was found in the translation using ` +
					`forbidden type ${tag}. Component elements must use the "${COMPONENT_TAG}" tag.`
			);
			return false;
		}
		if (config instanceof TagElement && config.tag !== tag) {
			fluent.current.onError(
				`An element named "${name}" was found in the translation ` +
					`but its type ${tag} didn't match the ` +
					`element found in the configuration (${config.tag}).`
			);
			return false;
		}
		return true;
	}

	function warnOnSelfClosingComponentElement(source: string) {
		let match: RegExpExecArray | null;
		while ((match = REGEX_SELF_CLOSING_COMPONENT_TAG.exec(source)) !== null) {
			// The full matched string, e.g., '<fluent-component data-element="icon" />'
			const fullMatch = match[0];

			fluent.current.onError(
				`Detected component element using self-closing syntax: \`${fullMatch}\`. ` +
					'This can lead to unexpected results. Use a regular closing tag like ' +
					`\`<${COMPONENT_TAG} data-element="example"></${COMPONENT_TAG}>\` instead.`
			);
		}
	}

	const makeParserHandlers = (out: Content): Handlers => ({
		textNode: (node) => out.push(node.textContent),
		elementNode: (elementNode) => {
			const tag = elementNode.localName;
			const name = elementNode.getAttribute('data-element');
			const config = name ? elementConfigs.get(name) : undefined;

			if (!validateElement(tag, name, config)) {
				out.push(elementNode.textContent);
				return;
			}

			const attributes = [...elementNode.attributes].reduce(
				(obj, attr) => {
					obj[attr.name] = attr.value;
					return obj;
				},
				{} as Record<string, string>
			);
			const item: ContentItem = {
				tag,
				attributes,
				config,
				content: []
			};
			out.push(item);
			return makeParserHandlers(item.content);
		}
	});

	function getContent(source: string): Content {
		// shortcut if translation doesn't contain markup
		if (!REGEX_OVERLAY.test(source)) {
			return [source];
		}
		const content: Content = [];
		warnOnSelfClosingComponentElement(source);
		fluent.current.markupParser.parse(source, makeParserHandlers(content));
		return content;
	}
</script>

{#snippet outputContent(content: Content)}
	{#each content as item (item)}
		{#if typeof item === 'string'}{item}{:else}
			{#snippet children()}{@render outputContent(item.content)}{/snippet}
			{#if item.config instanceof ComponentElement}
				{@const [Component, props] = item.config.resolve(item.attributes)}
				<LocalizedTag
					tag={COMPONENT_TAG}
					attributes={item.attributes}
					trustedAttributes={{ style: 'display: contents;' }}
					allowAttributes={['data-element']}><Component {...props} {children} /></LocalizedTag
				>
			{:else}
				{@render outputTag({
					tag: item.tag,
					attributes: item.attributes,
					trustedAttributes: item.config?.attributes,
					allowAttributes: item.config?.allowAttributes,
					children
				})}
			{/if}
		{/if}
	{/each}
{/snippet}

{#snippet defaultOutputTag({
	tag,
	attributes,
	trustedAttributes,
	allowAttributes,
	children
}: OutputTagOptions)}
	<LocalizedTag {tag} {attributes} {trustedAttributes} {allowAttributes} {children} />
{/snippet}

{#snippet children()}
	{@render lead?.()}
	{@render outputContent(getContent(translation.value) ?? [])}
	{@render trail?.()}
{/snippet}

{@render outputTag({
	tag,
	attributes: translation.attributes,
	trustedAttributes: tagAttributes,
	allowAttributes: tagOptions?.allowAttributes,
	children
})}
