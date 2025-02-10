<script lang="ts">
	import type { FluentVariable } from '@fluent/bundle';
	import { Localized } from '../index.js';

	let {
		id,
		args
	}: {
		id: string;
		args?: Record<string, FluentVariable> | undefined;
	} = $props();
</script>

<Localized {id} {args}>
	{#snippet children({ text, attrs })}
		<slot {text} {attrs}>{text}</slot>
	{/snippet}
</Localized>
