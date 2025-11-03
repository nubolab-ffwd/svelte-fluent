<script>
	import { FluentBundle } from '@fluent/bundle';
	import { createSvelteFluent, setSvelteFluent, Localized } from '@nubolab-ffwd/svelte-fluent';
	import resourceEn from './en.ftl';

	const bundle = new FluentBundle('en');
	bundle.addResource(resourceEn);

	setSvelteFluent(() => createSvelteFluent([bundle]));
</script>

<Localized id="hello" />
