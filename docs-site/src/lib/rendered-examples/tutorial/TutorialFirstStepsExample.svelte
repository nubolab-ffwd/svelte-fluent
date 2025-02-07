<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import App from 'svelte-fluent-examples/src/tutorial/first-steps/App.svelte';
	import appSource from 'svelte-fluent-examples/src/tutorial/first-steps/App.svelte?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
