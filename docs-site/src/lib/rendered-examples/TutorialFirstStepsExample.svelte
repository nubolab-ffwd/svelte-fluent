<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/tutorial-first-steps/App.svelte';
	import appSource from '$lib/examples/tutorial-first-steps/App.svelte?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
