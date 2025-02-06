<!-- src/routes/+layout.svelte -->

<script lang="ts">
	import { initFluentContext } from '@nubolab-ffwd/svelte-fluent';
	import type { PageData } from './$types';
	import type { Snippet } from 'svelte';

	let { data, children }: { data: PageData; children: Snippet } = $props();
	initFluentContext(() => data.fluent);
</script>

{@render children()}
