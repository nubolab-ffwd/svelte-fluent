<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/overlay/static-text/App.svelte';
	import componentSource from '$lib/examples/overlay/static-text/Component.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/overlay/static-text/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
