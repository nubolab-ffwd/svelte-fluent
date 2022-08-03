<script lang="ts">
	import { loadExample, loadExampleSource } from './_examples';

	export let name: string;
	export let extras: string[] = [];

	const component = loadExample(name).then((x) => x.default);

	$: sourceFiles = [name, ...extras.map((e) => [basename(name), e].join('/'))];
	$: sources = Object.fromEntries(sourceFiles.map((f) => [f, loadExampleSource(f)]));

	$: currentSourceFile = sourceFiles[0];
	$: source = sources[currentSourceFile];

	function basename(name: string): string {
		return name.split('/').slice(0, -1).join('/');
	}

	function filename(name: string): string {
		return name.split('/').pop() as string;
	}
</script>

{#each Object.entries(sources) as [name, source]}
	<strong>{filename(name)}</strong>
	<div class="box source">
		<pre><code>{source}</code></pre>
	</div>
{/each}

<strong>Rendered:</strong>
{#await component}
	Loading example…
{:then component}
	<div class="box">
		<svelte:component this={component} />
	</div>
{/await}

<style lang="scss">
	.source {
		overflow-y: auto;
	}
</style>
