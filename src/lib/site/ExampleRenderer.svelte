<script lang="ts">
	export let sources: Record<string, string>;
	export let component: object;
	export let componentArgs: Record<string, unknown> = {};
	import { code_highlight } from './highlight';
</script>

{#each Object.entries(sources) as [name, source], idx}
	<div class="code-block stack">
		{#if idx !== 0}
			<span class="filepath">{name}</span>
		{/if}
		{#if name.endsWith('.svelte')}{@html code_highlight(source, 'svelte')}
		{:else if name.endsWith('.ftl')}{@html code_highlight(source, 'ftl')}
		{:else}
			<pre class="box"><code>{source}</code></pre>
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
			width: 100%;
		}
	}
</style>
