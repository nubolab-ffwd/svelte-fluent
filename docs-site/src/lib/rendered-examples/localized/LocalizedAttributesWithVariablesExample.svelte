<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/localized/attributes-with-variables/App.svelte';
	import componentSource from '$lib/examples/localized/attributes-with-variables/Component.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/localized/attributes-with-variables/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
