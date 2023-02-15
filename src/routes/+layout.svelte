<script lang="ts" context="module">
	// navigator.languages is used in some examples, needs to be "polyfilled" for SSR
	if (!('navigator' in globalThis)) {
		globalThis['navigator'] = { languages: [] } as unknown as Navigator;
	}
</script>

<script lang="ts">
	import '../app.postcss';
	import Header from './Header.svelte';
</script>

<Header />

<div class="content">
	<slot />
</div>

<style lang="postcss">
	.content {
		margin-block-end: calc(var(--space) * 5);
	}
</style>
