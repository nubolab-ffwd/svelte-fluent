<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from '$lib/examples/tutorial-change-wrapper/App.svelte';
	import componentSource from '$lib/examples/tutorial-change-wrapper/Component.svelte?raw&highlight';
	import enFtlSource from '$lib/examples/tutorial-change-wrapper/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
