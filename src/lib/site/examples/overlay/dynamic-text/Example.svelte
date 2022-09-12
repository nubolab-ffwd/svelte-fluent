<script lang="ts">
	import ExampleRenderer from '$lib/site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import componentSource from './Component.svelte?raw';
	import enFtlSource from './en.ftl?raw';
</script>

<ExampleRenderer
	sources={{ 'Component.svelte': componentSource, 'en.ftl': enFtlSource }}
	component={appComponent}
/>
