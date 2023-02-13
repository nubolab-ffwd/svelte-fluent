<script lang="ts">
	export let sources: Record<string, string>;
	export let component: object;
	import { code_highlight } from './highlight';
</script>

{#each Object.entries(sources) as [name, source]}
	<div class="code-block">
		<span class="filepath">{name}</span>
		{#if name.endsWith('.svelte')}
			<pre class="language-svelte"><code class="language-svelte"
					>{@html code_highlight(source, 'svelte')}</code
				></pre>
		{:else}
			<pre class="box"><code>{source}</code></pre>
		{/if}
	</div>
{/each}

<strong>Rendered:</strong>
<div class="box rendered">
	<svelte:component this={component} />
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
</style>
