<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider } from '@nubolab-ffwd/svelte-fluent';
	import translationsEn from './en.ftl?raw';
	import Component from './Component.svelte';

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en');
	bundle.addResource(resource);

	let productName = 'Example Product';
</script>

<FluentProvider bundles={[bundle]}>
	<div>
		<label>Name: <input bind:value={productName} /></label>
	</div>
	<Component {productName} />
</FluentProvider>
