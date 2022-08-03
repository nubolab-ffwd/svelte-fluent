<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';
	import { negotiateLanguages } from '@fluent/langneg';
	import translationsEn from './en.ftl?raw';
	import translationsDe from './de.ftl?raw';
	import translationsFr from './fr.ftl?raw';

	const defaultLocale = 'en';
	const resources = {
		en: new FluentResource(translationsEn),
		fr: new FluentResource(translationsFr),
		de: new FluentResource(translationsDe)
	};
	const supportedLocales = Object.keys(resources);

	function generateBundles(userLocales) {
		// Choose locales that are best for the user.
		const selectedLocales = negotiateLanguages(userLocales, supportedLocales, {
			defaultLocale,
			strategy: 'lookup'
		});
		// prepare fluent bundles
		return selectedLocales.map((locale) => {
			const bundle = new FluentBundle(locale);
			bundle.addResource(resources[locale]);
			return bundle;
		});
	}
</script>

<FluentProvider bundles={generateBundles(navigator.languages)}>
	<strong>
		<Localized id="hello" />
	</strong>
</FluentProvider>
