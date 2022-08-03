<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import translationsEn from './en.ftl?raw';

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en');
	bundle.addResource(resource);
</script>

<FluentProvider bundles={[bundle]}>
	<strong>
		<Localized id="hello" />
	</strong>
</FluentProvider>
