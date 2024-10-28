<script lang="ts">
	import type { FluentVariable } from '@fluent/bundle';
	import { Overlay } from '..';

	let {
		id,
		args
	}: {
		id: string;
		args?: Record<string, FluentVariable> | undefined;
	} = $props();
</script>

<Overlay {id} {args}>
	{#snippet children()}
		<slot />
	{/snippet}
</Overlay>
