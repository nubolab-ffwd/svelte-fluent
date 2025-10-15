<script>
	import resource from './en.ftl';
	import Component from './Component.svelte';
	import ExampleApp from '../ExampleApp.svelte';

	let { unreadEmails = 10 } = $props();
</script>

<ExampleApp {resource}>
	<Component {unreadEmails} />
</ExampleApp>
