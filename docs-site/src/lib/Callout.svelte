<script lang="ts">
	import type { Snippet } from 'svelte';
	import { tw } from './tailwind';
	import MaterialSymbolsInfoOutline from '~icons/material-symbols/info-outline';
	import MaterialSymbolsCheckCircleOutline from '~icons/material-symbols/check-circle-outline';
	import MaterialSymbolsWarningOutline from '~icons/material-symbols/warning-outline';
	import type { ClassValue } from 'svelte/elements';

	type CalloutType = 'note' | 'success' | 'warning' | 'error';

	interface Props {
		type?: CalloutType;
		title?: string;
		children: Snippet;
	}
	const { type = 'note', title, children }: Props = $props();

	const defaultTitles: Record<CalloutType, string> = {
		note: 'Note',
		success: 'Success',
		warning: 'Warning',
		error: 'Error'
	};

	const typeClasses: Record<CalloutType, ClassValue> = {
		note: tw`preset-outlined-surface-800-200`,
		success: tw`preset-outlined-success-800-200`,
		warning: tw`preset-outlined-warning-800-200`,
		error: tw``
	};
</script>

<div class={['card my-2 space-y-2 p-4', typeClasses[type]]}>
	<div class={['flex items-center gap-2', type === 'warning' && 'text-warning-800-200']}>
		{#if type === 'note'}<MaterialSymbolsInfoOutline />
		{:else if type === 'success'}<MaterialSymbolsCheckCircleOutline />
		{:else if type === 'warning' || type === 'error'}<MaterialSymbolsWarningOutline />
		{/if}
		<span class="font-bold">{title ?? defaultTitles[type]}</span>
	</div>
	<div class="space-y-2 text-sm">{@render children()}</div>
</div>
