<script lang="ts" module>
	// navigator.languages is used in some examples, needs to be "polyfilled" for SSR
	if (!('navigator' in globalThis)) {
		globalThis['navigator'] = { languages: [] } as unknown as Navigator;
	}
</script>

<script lang="ts">
	import '../app.postcss';
	import Header from './Header.svelte';
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	let seo = $derived({
		...page.data.seo,
		title: [page.data.seo?.title, 'svelte-fluent'].filter(Boolean).join(' | ')
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	{#if seo.description}
		<meta name="description" content={seo.description} />
	{/if}
</svelte:head>

<div class="stack" style:--gap="var(--s2)">
	<div class="header">
		<Header />
	</div>
	<div class="content">
		{@render children()}
	</div>
</div>

<style lang="postcss">
	.header {
		z-index: 1;
	}
	.content {
		margin-block-end: var(--s5);
	}
</style>
