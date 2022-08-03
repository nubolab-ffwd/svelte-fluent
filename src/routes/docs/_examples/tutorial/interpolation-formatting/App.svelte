<script>
	import { FluentBundle, FluentNumber, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import translationsEn from './en.ftl?raw';

	const resource = new FluentResource(translationsEn);
	const bundle = new FluentBundle('en');
	bundle.addResource(resource);
</script>

<FluentProvider bundles={[bundle]}>
	<div><Localized id="dpi-ratio" args={{ ratio: 16 / 9 }} /></div>
	<div>
		<Localized
			id="balance"
			args={{ balance: new FluentNumber(1234.56, { style: 'currency', currency: 'USD' }) }}
		/>
	</div>
	<div><Localized id="today-is" args={{ date: new Date() }} /></div>
</FluentProvider>
