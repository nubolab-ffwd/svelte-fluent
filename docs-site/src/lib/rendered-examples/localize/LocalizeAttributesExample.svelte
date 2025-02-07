<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import App from 'svelte-fluent-examples/src/localize/attributes/App.svelte';
	import componentSource from 'svelte-fluent-examples/src/localize/attributes/Component.svelte?raw&highlight';
	import enFtlSource from 'svelte-fluent-examples/src/localize/attributes/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
