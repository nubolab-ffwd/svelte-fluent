<script lang="ts" module>
	const LOCALIZABLE_ATTRIBUTES: Record<string, string[]> = {
		global: ['title', 'aria-description', 'aria-label', 'aria-valuetext'],
		a: ['download'],
		area: ['download', 'alt'],
		input: ['alt', 'placeholder'],
		menuitem: ['label'],
		menu: ['label'],
		optgroup: ['label'],
		option: ['label'],
		track: ['label'],
		img: ['alt'],
		textarea: ['placeholder'],
		th: ['abbr']
	};

	const isLocalizableAttribute = (name: string, tag: string, explicitAllow?: string[]) => {
		const attrName = name.toLowerCase();
		return (
			explicitAllow?.includes(attrName) ||
			LOCALIZABLE_ATTRIBUTES[tag]?.includes(attrName) ||
			LOCALIZABLE_ATTRIBUTES.global.includes(attrName)
		);
	};
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		tag: string;
		attributes?: Record<string, string>;
		trustedAttributes?: Record<string, string>;
		allowAttributes?: string[];
		children?: Snippet;
	}
	let { tag, attributes, trustedAttributes, allowAttributes, children }: Props = $props();

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
