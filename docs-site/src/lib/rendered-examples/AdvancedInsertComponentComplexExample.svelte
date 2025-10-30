<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/advanced-insert-component-complex/App.svelte';
	import componentSource from '$lib/examples/advanced-insert-component-complex/Component.svelte?raw&highlight';
	import outlineSource from '$lib/examples/advanced-insert-component-complex/Outline.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/advanced-insert-component-complex/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'Outline.svelte': { code: outlineSource, html: true, collapsed: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
