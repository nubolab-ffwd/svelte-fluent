<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import componentSource from './Component.svelte?raw';
</script>

<ExampleRenderer sources={{ 'Component.svelte': componentSource }} component={appComponent} />
