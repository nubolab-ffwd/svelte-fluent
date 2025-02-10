<script lang="ts">
	import { FrontpageExample } from '$lib/rendered-examples';
	import Hero from './Hero.svelte';
</script>

<div class="content center with-gutters">
	<div class="stack">
		<Hero />
		<p>
			With svelte-fluent, developers can focus on building the core functionality of their
			application while not standing in the way of translating it into multiple languages.
		</p>
		<p>
			Fluent is a <a href="https://projectfluent.org/" target="_blank" rel="noopener noreferrer"
				>localization system developed by Mozilla</a
			> to address the limitations of traditional localization systems. They designed it to make it easier
			to create translations of software interfaces and content and to support more complex language
			structures than traditional localization systems can handle.
		</p>
		<p>
			The example below shows how you can use svelte-fluent and FTL, the format for describing
			translation resources used by Fluent, to represent complex natural language concepts such as
			gender, plurals, and others that are important to many languages but difficult to handle with
			traditional localization systems.
		</p>
		<FrontpageExample />
	</div>
</div>

<style lang="postcss">
	.content {
		max-inline-size: calc(var(--measure) * 1.33);
	}
</style>
