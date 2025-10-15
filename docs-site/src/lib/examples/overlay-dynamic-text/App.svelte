<script>
	import resource from './en.ftl';
	import Component from './Component.svelte';
	import ExampleApp from '../ExampleApp.svelte';

	let { productName = 'Example Product' } = $props();
</script>

<ExampleApp {resource}>
	<Component {productName} />
</ExampleApp>
