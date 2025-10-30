<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		name: string;
		type: string;
		required?: boolean;
		default?: string;
		children: Snippet;
	}
	const { name, type, children, default: defaultValue, required = false }: Props = $props();
</script>

<div class="props-description">
	<div class="space-y-4">
		<header class="space-y-1">
			<div class="flex items-center gap-2">
				<span class="dark:text-primary-500 text-primary-700 font-mono font-bold">{name}</span>
				<code class="code" title="TypeScript type">{type}</code>
			</div>
		</header>
		{@render children()}
		{#if defaultValue}
			<div class="flex items-center gap-2">
				Default:
				<code class="code">{defaultValue}</code>
			</div>
		{/if}
		{#if required}
			<span class="text-error-600-400 font-mono">required</span>
		{/if}
	</div>
</div>
