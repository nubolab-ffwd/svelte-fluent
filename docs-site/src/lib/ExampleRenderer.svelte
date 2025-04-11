<script lang="ts">
	import type { Snippet } from 'svelte';

	type SourceEntry = { code: string; html: boolean };

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

<div class="stack" aria-label="Code example">
	{#each Object.entries(normalizedSources) as [name, entry], idx (name)}
		<div class="code-block stack">
			{#if idx !== 0}
				<span class="filepath">{name}</span>
			{/if}
			{#if entry.html}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html entry.code}
			{:else}
				<pre class="box"><code>{entry.code}</code></pre>
			{/if}
		</div>
	{/each}

	<div>Result:</div>
	<div class="stack" class:box={!!controls}>
		<div class="box rendered">
			{@render children()}
		</div>

		{#if controls}
			<div class="controls">
				{@render controls()}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.rendered {
		& :global(input),
		& :global(select),
		& :global(button) {
			color: initial;
		}
		& :global(a) {
			text-decoration: underline;
		}
	}
	.controls {
		& :global(dl) {
			display: grid;
			grid-template-rows: auto;
			grid-template-columns: min-content minmax(min-content, calc(var(--measure) / 3));
			align-items: start;
			gap: var(--s-2);
			align-items: center;
		}
		& :global(dl > dt) {
			font-family: Mensch;
			font-size: var(--font-size-code);
		}
		& :global(dl > dd > *) {
			inline-size: 100%;
		}
	}
</style>
