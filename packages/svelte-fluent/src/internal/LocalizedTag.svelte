<script lang="ts">
	import type { Snippet } from 'svelte';
	import { LOCALIZABLE_ATTRIBUTES } from './definitions.js';

	interface Props {
		tag: string;
		attributes?: Record<string, string>;
		trustedAttributes?: Record<string, unknown>;
		allowAttributes?: string[];
		children?: Snippet;
	}
	let { tag, attributes, trustedAttributes, allowAttributes, children }: Props = $props();

	const isLocalizableAttribute = (name: string, tag: string, explicitAllow?: string[]) => {
		const attrName = name.toLowerCase();
		return (
			explicitAllow?.includes(attrName) ||
			LOCALIZABLE_ATTRIBUTES[tag]?.includes(attrName) ||
			LOCALIZABLE_ATTRIBUTES.global.includes(attrName)
		);
	};

	let cleanAttributes = $derived(
		Object.fromEntries(
			Object.entries(attributes ?? {}).filter(([name]) =>
				isLocalizableAttribute(name, tag, allowAttributes)
			)
		)
	);

	let combinedAttributes = $derived({
		...cleanAttributes,
		...trustedAttributes
	});
</script>

<svelte:element this={tag} {...combinedAttributes}>
	{@render children?.()}
</svelte:element>
