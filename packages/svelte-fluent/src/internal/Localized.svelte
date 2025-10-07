<script lang="ts">
	import type { FluentVariable } from '@fluent/bundle';
	import { getInternalFluentContext } from './context.svelte.js';
	import type { Snippet } from 'svelte';
	import LocalizedTag from './LocalizedTag.svelte';
	import { ComponentElement, TagElement } from './elements.js';
	import { type Handlers } from '../markup-parser/client.js';
	import { getTranslation } from './fluent.js';

	const TEXT_LEVEL_ELEMENTS = [
		'em',
		'strong',
		'small',
		's',
		'cite',
		'q',
		'dfn',
		'abbr',
		'data',
		'time',
		'code',
		'var',
		'samp',
		'kbd',
		'sub',
		'sup',
		'i',
		'b',
		'u',
		'mark',
		'bdi',
		'bdo',
		'span',
		'br',
		'wbr'
	];
	const COMPONENT_TAG = 'fluent-component';
	const ALLOWED_ELEMENTS = [...TEXT_LEVEL_ELEMENTS, COMPONENT_TAG];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	type ElementConfig = TagElement | ComponentElement<any>;
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

	const ctx = getInternalFluentContext();

	interface Props {
		id: string;
		args?: Record<string, FluentVariable> | undefined;
		tag?: string;
		attributes?: Record<string, string>;
		elements?: Record<string, ElementConfig>;
		outputTag?: Snippet<[OutputTagOptions]>;
	}

	let {
		id,
		args,
		tag = 'div',
		attributes,
		elements: propElements = {},
		outputTag
	}: Props = $props();
	let translation = $derived(getTranslation(ctx.fluent, id, args, true));

	let elementConfigs = $derived(new Map(Object.entries(propElements)));

	function validateElement(
		tag: string,
		name: string | null,
		config: ElementConfig | undefined
	): boolean {
		if (!ALLOWED_ELEMENTS.includes(tag) && !name) {
			console.warn(
				`An element of forbidden type "${tag}" was found in the translation. ` +
					'Only safe text-level elements and elements with "data-element" attribute are allowed.'
			);
			return false;
		}
		if (name && !config) {
			console.warn(`An element named "${name}" wasn't found in the configuration.`);
			return false;
		}
		if (tag === COMPONENT_TAG && (!name || !(config instanceof ComponentElement))) {
			console.warn(
				`The "${COMPONENT_TAG}" tag must reference a component element with "data-element".`
			);
			return false;
		}
		if (tag !== COMPONENT_TAG && config instanceof ComponentElement) {
			console.warn(
				`A component element named "${name}" was found in the translation using ` +
					`forbidden type ${tag}. Component elements must use the "${COMPONENT_TAG}" tag.`
			);
			return false;
		}
		if (config instanceof TagElement && config.tag !== tag) {
			console.warn(
				`An element named "${name}" was found in the translation ` +
					`but its type ${tag} didn't match the ` +
					`element found in the configuration (${config.tag}).`
			);
			return false;
		}
		return true;
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

	function getContent(source: string) {
		const content: Content = [];
		ctx.fluent.markupParser.parse(source, makeParserHandlers(content));
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
			{:else if outputTag}
				{@render outputTag({
					tag: item.tag,
					attributes: item.attributes,
					trustedAttributes: item.config?.attributes,
					allowAttributes: item.config?.allowAttributes,
					children
				})}
			{:else}
				<LocalizedTag
					tag={item.tag}
					attributes={item.attributes}
					trustedAttributes={item.config?.attributes}
					allowAttributes={item.config?.allowAttributes}
					{children}
				/>
			{/if}
		{/if}
	{/each}
{/snippet}

<LocalizedTag {tag} attributes={translation.attributes} trustedAttributes={attributes}
	>{@render outputContent(getContent(translation.value) ?? [])}</LocalizedTag
>
