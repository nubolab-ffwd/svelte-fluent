<script lang="ts">
	import { onMount } from 'svelte';
	import type Editor from './Editor.svelte';

	let component: Promise<typeof Editor>;
	export let text = '';
	onMount(() => {
		component = import('./Editor.svelte').then((m) => m.default);
	});
</script>

{#await component}
	Loading Editor…
{:then Editor}
	<svelte:component this={Editor} {...$$props} bind:text />
{/await}
