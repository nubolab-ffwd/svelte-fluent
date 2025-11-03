<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { createSvelteFluent, setSvelteFluent, Localized } from '@nubolab-ffwd/svelte-fluent';

	const translations = 'hello = Hello, world!';
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));

	setSvelteFluent(() => createSvelteFluent([bundle]));
</script>

<Localized id="hello" />
