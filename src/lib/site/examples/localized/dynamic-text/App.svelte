<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider } from '@nubolab-ffwd/svelte-fluent';
	import translationsEn from './en.ftl?raw';
	import Component from './Component.svelte';

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en');
	bundle.addResource(resource);

	/** @type {number} */
	let unreadEmails = 10;
</script>

<FluentProvider bundles={[bundle]}>
	<div>
		<label>Emails: <input type="number" bind:value={unreadEmails} /></label>
	</div>
	<Component {unreadEmails} />
</FluentProvider>
