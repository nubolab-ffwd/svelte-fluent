<script lang="ts">
	export let sources: Record<string, string>;
	export let component: object;
</script>

{#each Object.entries(sources) as [name, source]}
	<div class="code-block">
		<span class="filepath">{name}</span>
		<pre class="box"><code>{source}</code></pre>
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
