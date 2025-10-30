<script lang="ts">
	import FrontpageExample from '$lib/rendered-examples/FrontpageExample.svelte';
	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
</script>

<div class="shadow">
	<div class="h-(--header-height) mx-auto box-content flex max-w-4xl items-center px-4">
		<div class="flex-1">
			<Header />
		</div>
	</div>
</div>

<div class="breakout-grid mb-18 gap-y-4 p-4" style:--max-content-width="var(--container-4xl)">
	<div class="my-8">
		<Hero />
	</div>
	<p>
		With svelte-fluent, developers can focus on building the core functionality of their application
		while not standing in the way of translating it into multiple languages.
	</p>
	<p>
		Fluent is a <a
			class="anchor"
			href="https://projectfluent.org/"
			target="_blank"
			rel="noopener noreferrer">localization system developed by Mozilla</a
		> to address the limitations of traditional localization systems. They designed it to make it easier
		to create translations of software interfaces and content and to support more complex language structures
		than traditional localization systems can handle.
	</p>
	<p>
		The example below shows how you can use svelte-fluent and FTL, the format for describing
		translation resources used by Fluent, to represent complex natural language concepts such as
		gender, plurals, and others that are important to many languages but difficult to handle with
		traditional localization systems.
	</p>

	<div class="breakout my-8">
		<FrontpageExample />
	</div>
</div>
