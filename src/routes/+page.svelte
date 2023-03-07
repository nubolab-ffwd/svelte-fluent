<script lang="ts">
	import Example from '$site/examples/frontpage/Example.svelte';
	import Hero from './Hero.svelte';
</script>

<div class="content center with-gutters">
	<div class="stack">
		<Hero />
		<Example />
	</div>
</div>

<style lang="postcss">
	.content {
		max-inline-size: calc(var(--measure) * 1.33);
	}
</style>
