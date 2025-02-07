<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import App from 'svelte-fluent-examples/src/localized-legacy/attributes/App.svelte';
	import componentSource from 'svelte-fluent-examples/src/localized-legacy/attributes/Component.svelte?raw&highlight';
	import enFtlSource from 'svelte-fluent-examples/src/localized-legacy/attributes/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
