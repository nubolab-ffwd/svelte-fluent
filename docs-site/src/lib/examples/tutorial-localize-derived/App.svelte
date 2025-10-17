<script>
	import { FluentBundle } from '@fluent/bundle';
	import { createSvelteFluent, initFluentContext, Localized } from '@nubolab-ffwd/svelte-fluent';
	import resourceEn from './en.ftl';
	import resourceDe from './de.ftl';
	import Component from './Component.svelte';

	let { locale = 'en' } = $props();

	const resources = {
		en: resourceEn,
		de: resourceDe
	};

	const bundle = $derived.by(() => {
		const bundle = new FluentBundle(locale);
		bundle.addResource(resources[locale]);
		return bundle;
	});

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<Component />
