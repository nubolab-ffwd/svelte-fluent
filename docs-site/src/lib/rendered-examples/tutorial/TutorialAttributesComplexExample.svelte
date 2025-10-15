<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/tutorial/attributes-complex/App.svelte';
	import appSource from '$lib/examples/tutorial/attributes-complex/App.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/tutorial/attributes-complex/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
