<script lang="ts">
	export let sources: Record<string, string>;
	export let component: object;
</script>

{#each Object.entries(sources) as [name, source]}
	<div>
		<strong>{name}</strong>
	</div>
	<div class="box source">
		<pre><code>{source}</code></pre>
	</div>
{/each}

<strong>Rendered:</strong>
<div class="box rendered">
	<svelte:component this={component} />
</div>

<style lang="postcss">
	.source {
		overflow-y: auto;
	}
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
