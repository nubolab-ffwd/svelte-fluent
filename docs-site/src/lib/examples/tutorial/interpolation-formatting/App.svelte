<script>
	import { FluentBundle, FluentNumber } from '@fluent/bundle';
	import { createSvelteFluent, initFluentContext, Localized } from '@nubolab-ffwd/svelte-fluent';
	import resourceEn from './en.ftl';

	const bundle = new FluentBundle('en');
	bundle.addResource(resourceEn);

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<div><Localized id="dpi-ratio" args={{ ratio: 16 / 9 }} /></div>
<div>
	<Localized
		id="balance"
		args={{ balance: new FluentNumber(1234.56, { style: 'currency', currency: 'USD' }) }}
	/>
</div>
<div><Localized id="today-is" args={{ date: new Date() }} /></div>
