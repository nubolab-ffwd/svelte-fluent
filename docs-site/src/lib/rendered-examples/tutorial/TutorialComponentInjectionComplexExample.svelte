<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from 'svelte-fluent-examples/src/tutorial/component-injection-complex/App.svelte';
	import appSource from 'svelte-fluent-examples/src/tutorial/component-injection-complex/App.svelte?raw&highlight';
	import outlineSource from 'svelte-fluent-examples/src/tutorial/component-injection-complex/Outline.svelte?raw&highlight';
	import enFtlSource from 'svelte-fluent-examples/src/tutorial/component-injection-complex/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true },
		'Outline.svelte.svelte': { code: outlineSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
