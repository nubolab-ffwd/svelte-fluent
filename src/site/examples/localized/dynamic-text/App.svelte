<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider } from '@nubolab-ffwd/svelte-fluent';
	import translationsEn from './en.ftl?raw';
	import Component from './Component.svelte';

	export let unreadEmails = 10;

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en');
	bundle.addResource(resource);
</script>

<FluentProvider bundles={[bundle]}>
	<Component {unreadEmails} />
</FluentProvider>
