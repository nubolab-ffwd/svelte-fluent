<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import componentSource from './Component.svelte?raw&highlight';
	import enFtlSource from './en.ftl?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true },
		'en.ftl': { code: enFtlSource, html: true }
	}}
	component={appComponent}
/>
