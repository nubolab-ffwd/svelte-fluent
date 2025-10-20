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
	<div class="stack" style:--gap="var(--s-3)">
		<header>
			<div>
				<span class="name">{name}</span>
				<code class="badge">{type}</code>
				{#if required}<span class="required">required</span>{/if}
			</div>
		</header>
		{#if defaultValue}<div>Default: <code>{defaultValue}</code></div>{/if}
		{@render children()}
	</div>
</div>

<style lang="postcss">
	header {
		display: flex;
		flex-direction: row;
		gap: var(--s-2);
	}
	.name {
		color: var(--theme-color-primary);
	}
	.required {
		color: red;
	}
</style>
