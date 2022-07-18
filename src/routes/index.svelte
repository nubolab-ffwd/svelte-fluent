<script lang="ts">
	import { negotiateLanguages } from '@fluent/langneg';
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '$lib';

	// Store all translations as a simple object which is available
	// synchronously and bundled with the rest of the code.
	const RESOURCES: Record<string, FluentResource> = {
		fr: new FluentResource('hello = Salut le monde !'),
		'en-US': new FluentResource('hello = Hello, world!'),
		pl: new FluentResource('hello = Witaj świecie!')
	};

	// A generator function responsible for building the sequence
	// of FluentBundle instances in the order of user's language
	// preferences.
	function* generateBundles(userLocales: readonly string[]) {
		// Choose locales that are best for the user.
		const currentLocales = negotiateLanguages(userLocales, ['fr', 'en-US', 'pl'], {
			defaultLocale: 'en-US'
		});

		for (const locale of currentLocales) {
			const bundle = new FluentBundle(locale);
			bundle.addResource(RESOURCES[locale]);
			yield bundle;
		}
	}
</script>

<FluentProvider bundles={generateBundles([])}>
	<h1>
		<Localized id="hello" />
	</h1>
</FluentProvider>
