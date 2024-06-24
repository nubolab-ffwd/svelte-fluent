<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import App from './App.svelte';
	import appSource from './App.svelte?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
