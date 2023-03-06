<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import appSource from './App.svelte?raw&highlight';
	import enFtlSource from './en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'App.svelte': { code: appSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
	component={appComponent}
/>
