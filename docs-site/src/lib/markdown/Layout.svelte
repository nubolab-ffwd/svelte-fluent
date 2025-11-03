<script lang="ts" module>
	import type { Snippet } from 'svelte';
	export { default as a } from './a.svelte';
	export { default as h1 } from './h1.svelte';
	export { default as h2 } from './h2.svelte';
	export { default as h3 } from './h3.svelte';
	export { default as h4 } from './h4.svelte';
	export { default as h5 } from './h5.svelte';
	export { default as h6 } from './h6.svelte';
	export { default as ul } from './ul.svelte';
	export { default as li } from './li.svelte';
	export { default as pre } from './pre.svelte';
	export { default as blockquote } from './blockquote.svelte';
	export { default as hr } from './hr.svelte';
</script>

<script lang="ts">
	const { children }: { children: Snippet } = $props();
</script>

{@render children()}
