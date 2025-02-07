<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import App from 'svelte-fluent-examples/src/localize/static-text/App.svelte';
	import componentSource from 'svelte-fluent-examples/src/localize/static-text/Component.svelte?raw&highlight';
	import enFtlSource from 'svelte-fluent-examples/src/localize/static-text/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
