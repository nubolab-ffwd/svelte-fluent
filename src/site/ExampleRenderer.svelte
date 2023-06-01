<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	type SourceEntry = { code: string; html: boolean };

	export let sources: Record<string, string | SourceEntry>;
	export let component: typeof SvelteComponent;
	export let componentArgs: Record<string, unknown> = {};

	$: normalizedSources = Object.fromEntries(
		Object.entries(sources).map(([name, entry]) => [
			name,
			typeof entry === 'string' ? { code: entry, html: false } : entry
		]) ?? []
	);
</script>

<div class="stack" aria-label="Code example">
	{#each Object.entries(normalizedSources) as [name, entry], idx}
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
	<div class="stack" class:box={$$slots.controls}>
		<div class="box rendered">
			<svelte:component this={component} {...componentArgs} />
		</div>

		{#if $$slots.controls}
			<div class="controls">
				<slot name="controls" />
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
