<script>
	import { FluentBundle } from '@fluent/bundle';
	import { createSvelteFluent, initFluentContext, Localized } from '@nubolab-ffwd/svelte-fluent';
	import resourceEn from './en.ftl';

	const bundle = new FluentBundle('en');
	bundle.addResource(resourceEn);

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<Localized id="hello" args={{ name: 'everyone' }} />
