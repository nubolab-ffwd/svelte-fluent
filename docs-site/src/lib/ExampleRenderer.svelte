<script lang="ts">
	import type { Snippet } from 'svelte';
	import CodeBox from './CodeBox.svelte';

	type SourceEntry = { code: string; html: boolean; collapsed?: boolean };

	let {
		sources,
		children,
		controls
	}: {
		sources: Record<string, string | SourceEntry>;
		children: Snippet;
		controls?: Snippet;
	} = $props();

	let normalizedSources = $derived(
		Object.fromEntries(
			Object.entries(sources).map(([name, entry]) => [
				name,
				typeof entry === 'string' ? { code: entry, html: false } : entry
			]) ?? []
		)
	);
</script>

<div class="space-y-4" aria-label="Code example">
	{#each Object.entries(normalizedSources) as [name, entry] (name)}
		<CodeBox title={name} collapsible={entry.collapsed} defaultCollapsed={entry.collapsed}>
			{#if entry.html}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html entry.code}
			{:else}
				<pre><code>{entry.code}</code></pre>
			{/if}
		</CodeBox>
	{/each}

	<figure class="card bg-surface-900 text-surface-contrast-900 scheme-dark preview">
		<figcaption class="border-surface-700 text-surface-contrast-900/70 border-b-2 px-4 py-2">
			Preview
		</figcaption>
		<div class="preview-content p-4">
			{@render children()}
		</div>
	</figure>

	{#if controls}
		<div class="card bg-surface-900 text-surface-contrast-900 scheme-dark">
			<header class="border-surface-700 text-surface-contrast-900/70 border-b-2 px-4 py-2">
				Controls
			</header>
			<div class="p-4">
				{@render controls()}
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	@reference '../app.css';

	.preview {
		--anchor-font-color: var(--anchor-font-color-dark);
	}
	.preview-content {
		& :global(button) {
			@apply btn preset-outlined;
		}
		& :global(a) {
			@apply anchor;
		}
		& :global(input) {
			@apply input ring-surface-600 w-auto;
		}
	}
</style>
