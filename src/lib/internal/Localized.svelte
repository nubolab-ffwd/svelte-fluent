<script lang="ts">
	import type { FluentVariable } from '@fluent/bundle';
	import { getInternalFluentContext } from './context.svelte';
	import type { Snippet } from 'svelte';

	const { getTranslation } = getInternalFluentContext();

	let {
		id,
		args,
		children
	}: {
		id: string;
		args?: Record<string, FluentVariable> | undefined;
		children?: Snippet<[{ text: string; attrs: Record<string, string> }]>;
	} = $props();
	let translation = $derived(getTranslation(id, args, true));
</script>

{#if children}
	{@render children({ text: translation.value, attrs: translation.attributes })}
{:else}
	{translation.value}
{/if}
