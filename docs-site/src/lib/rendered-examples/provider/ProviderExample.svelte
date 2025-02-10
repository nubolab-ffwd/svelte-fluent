<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from 'svelte-fluent-examples/src/provider/App.svelte';
	import appSource from 'svelte-fluent-examples/src/provider/App.svelte?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
