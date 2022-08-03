<script>
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import { generateBundles } from '../utils';
	export let locale;
	const bundles = generateBundles(
		{
			de: 'hello = Hallo Welt!',
			en: 'hello = Hello, world!',
			fr: 'hello = Salut le monde !',
			pl: 'hello = Witaj świecie!'
		},
		'en',
		locale
	);
</script>

<FluentProvider {bundles}>
	<Localized id="hello" />
</FluentProvider>
