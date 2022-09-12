<script lang="ts">
	import ExampleRenderer from '$lib/site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import appSource from './App.svelte?raw';
	import enFtlSource from './en.ftl?raw';
	import frFtlSource from './fr.ftl?raw';
	import deFtlSource from './de.ftl?raw';
</script>

<ExampleRenderer
	sources={{
		'App.svelte': appSource,
		'en.ftl': enFtlSource,
		'fr.ftl': frFtlSource,
		'de.ftl': deFtlSource
	}}
	component={appComponent}
/>
