<script lang="ts" module>
	// navigator.languages is used in some examples, needs to be "polyfilled" for SSR
	if (!('navigator' in globalThis)) {
		globalThis['navigator'] = { languages: [] } as unknown as Navigator;
	}
</script>

<script lang="ts">
	import '../app.postcss';
	import Header from './Header.svelte';
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let seo = $derived({
		...$page.data.seo,
		title: [$page.data.seo?.title, 'svelte-fluent'].filter(Boolean).join(' | ')
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	{#if seo.description}
		<meta name="description" content={seo.description} />
	{/if}
</svelte:head>

<Header />

<div class="content">
	{@render children()}
</div>

<style lang="postcss">
	.content {
		margin-block-end: var(--s5);
	}
</style>
