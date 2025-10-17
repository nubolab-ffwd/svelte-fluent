<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/advanced-insert-component-simple/App.svelte';
	import componentSource from '$lib/examples/advanced-insert-component-simple/Component.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/advanced-insert-component-simple/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
