<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/advanced-insert-element/App.svelte';
	import componentSource from '$lib/examples/advanced-insert-element/Component.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/advanced-insert-element/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
