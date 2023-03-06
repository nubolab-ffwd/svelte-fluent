<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import componentSource from './Component.svelte?raw&highlight';
</script>

<ExampleRenderer
	sources={{
		'Component.svelte': { code: componentSource, html: true }
	}}
	component={appComponent}
/>
