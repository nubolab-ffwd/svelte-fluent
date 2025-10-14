<script lang="ts">
	import type { FluentVariable } from '@fluent/bundle';
	import { useSvelteFluent } from './context.svelte.js';
	import type { Snippet } from 'svelte';
	import { ComponentElement, TagElement } from './elements.js';
	import { type Handlers } from '#markup-parser';
	import { getTranslation } from './fluent.js';
	import {
		ALLOWED_ELEMENTS,
		COMPONENT_TAG,
		REGEX_OVERLAY,
		REGEX_SELF_CLOSING_COMPONENT_TAG
	} from './definitions.js';
	import { filterLocalizableAttributes } from './utils.js';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	type ElementConfig = TagElement<string> | ComponentElement<any>;
	type OutputTagOptions = {
		tag: string;
		untrustedAttributes: Attrs;
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

	interface Props {
		id: string;
		args?: Record<string, FluentVariable>;
		tag?: string;
		allowAttributes?: string[];
		elements?: Record<string, ElementConfig>;
		outputTag?: Snippet<[OutputTagOptions]>;
		children?: Snippet<[{ attributes: Record<string, string>; translatedContent: Snippet }]>;
	}

	let {
		id,
		args,
		tag = 'span',
		allowAttributes,
		elements: elementsProp = {},
		outputTag = defaultOutputTag,
		children
	}: Props = $props();

	const fluent = useSvelteFluent();

	let translation = $derived(getTranslation(fluent.current, id, args, true));
	let elementConfigs = $derived(new Map(Object.entries(elementsProp)));

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
				<svelte:element this={COMPONENT_TAG} data-element={item.attributes['data-element']}>
					<Component {...props} {children} />
				</svelte:element>
			{:else}
				{@render outputTag({
					tag: item.tag,
					untrustedAttributes: item.attributes,
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
	untrustedAttributes,
	trustedAttributes,
	allowAttributes,
	children
}: OutputTagOptions)}
	{@const attributes = {
		...filterLocalizableAttributes(tag, untrustedAttributes, allowAttributes),
		...trustedAttributes
	}}
	<svelte:element this={tag} {...attributes}>{@render children()}</svelte:element>
{/snippet}

{#snippet translatedContent()}
	{@render outputContent(getContent(translation.value) ?? [])}
{/snippet}

{#if children}
	{@render children({
		attributes: filterLocalizableAttributes(tag, translation.attributes, allowAttributes),
		translatedContent
	})}
{:else}
	{@render outputTag({
		tag,
		untrustedAttributes: translation.attributes,
		allowAttributes,
		children: translatedContent
	})}
{/if}
