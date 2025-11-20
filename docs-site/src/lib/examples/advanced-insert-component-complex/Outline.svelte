<script lang="ts">
	import type { Snippet } from 'svelte';

	let { color = 'grey', children }: { color?: string; children: Snippet } = $props();
</script>

<span style:border-color={color}>
	{@render children()}
</span>

<style>
	span {
		border-style: solid;
		border-width: 2px;
		padding: 2px 4px;
	}
</style>
