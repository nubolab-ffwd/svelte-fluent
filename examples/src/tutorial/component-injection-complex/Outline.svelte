<script lang="ts">
	import type { Snippet } from 'svelte';

	let { color = 'grey', children }: { color?: string; children: Snippet } = $props();
</script>

<span
	style:border-style="solid"
	style:border-width="2px"
	style:border-color={color}
	style:padding="2px 4px"
>
	{@render children()}
</span>
