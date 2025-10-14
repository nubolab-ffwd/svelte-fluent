<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from 'svelte-fluent-examples/src/tutorial/component-injection-simple/App.svelte';
	import appSource from 'svelte-fluent-examples/src/tutorial/component-injection-simple/App.svelte?raw&highlight';
	import enFtlSource from 'svelte-fluent-examples/src/tutorial/component-injection-simple/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
