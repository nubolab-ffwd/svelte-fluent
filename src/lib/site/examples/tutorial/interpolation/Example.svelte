<script lang="ts">
	import ExampleRenderer from '$lib/site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import appSource from './App.svelte?raw';
	import enFtlSource from './en.ftl?raw';
</script>

<ExampleRenderer
	sources={{ 'App.svelte': appSource, 'en.ftl': enFtlSource }}
	component={appComponent}
/>
