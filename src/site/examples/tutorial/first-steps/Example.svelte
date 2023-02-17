<script lang="ts">
	import ExampleRenderer from '$site/ExampleRenderer.svelte';
	import appComponent from './App.svelte';
	import appSource from './App.svelte?raw';
</script>

<ExampleRenderer sources={{ 'App.svelte': appSource }} component={appComponent} />
