<script lang="ts">
	import ExampleRenderer from '$lib/ExampleRenderer.svelte';
	import App from 'svelte-fluent-examples/src/tutorial/interpolation/App.svelte';
	import appSource from 'svelte-fluent-examples/src/tutorial/interpolation/App.svelte?raw&highlight';
	import enFtlSource from 'svelte-fluent-examples/src/tutorial/interpolation/en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
>
	<App />
</ExampleRenderer>
