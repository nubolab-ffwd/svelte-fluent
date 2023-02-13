<script lang="ts">
	export let sources: Record<string, string>;
	export let component: object;
	export let componentArgs: Record<string, unknown>;
	export let hideFilepath = false;
	import { code_highlight } from './highlight';
</script>

{#each Object.entries(sources) as [name, source]}
	<div class="code-block">
		{#if !hideFilepath}
			<span class="filepath">{name}</span>
		{/if}
		{#if name.endsWith('.svelte')}{@html code_highlight(source, 'svelte')}
		{:else if name.endsWith('.ftl')}{@html code_highlight(source, 'ftl')}
		{:else}
			<pre class="box"><code>{source}</code></pre>
		{/if}
	</div>
{/each}

Example:
<div class="box rendered">
	<svelte:component this={component} {...componentArgs} />
</div>

<slot name="controls" />

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
</style>
