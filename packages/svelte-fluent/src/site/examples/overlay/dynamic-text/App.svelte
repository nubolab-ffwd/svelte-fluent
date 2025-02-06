<script>
	import { FluentBundle } from '@fluent/bundle';
	import { createSvelteFluent, initFluentContext } from '@nubolab-ffwd/svelte-fluent';
	import resourceEn from './en.ftl';
	import Component from './Component.svelte';

	let { productName = 'Example Product' } = $props();

	const bundle = new FluentBundle('en');
	bundle.addResource(resourceEn);

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<Component {productName} />
