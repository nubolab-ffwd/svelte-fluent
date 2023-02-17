<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import Component from './Component.svelte';

	const translations = 'hello = Hello, world!';
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));
</script>

<Component bundles={[bundle]} />
