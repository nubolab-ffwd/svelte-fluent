<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/tutorial-interpolation/App.svelte';
	import appSource from '$lib/examples/tutorial-interpolation/App.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/tutorial-interpolation/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
