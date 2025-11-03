<script>
	import { FluentBundle } from '@fluent/bundle';
	import { createSvelteFluent, setSvelteFluent, Localized } from '@nubolab-ffwd/svelte-fluent';
	import { negotiateLanguages } from '@fluent/langneg';
	import resourceEn from './en.ftl';
	import resourceDe from './de.ftl';
	import resourceFr from './fr.ftl';

	// this could be stored in a user profile or browser localStorage
	let { selectedLocale = '' } = $props();

	const defaultLocale = 'en';
	const resources = {
		en: resourceEn,
		fr: resourceFr,
		de: resourceDe
	};
	const supportedLocales = Object.keys(resources);

	const bundles = $derived.by(() => {
		const userLocales = selectedLocale ? [selectedLocale] : navigator.languages;
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
	});
	setSvelteFluent(() => createSvelteFluent(bundles));
</script>

<Localized id="hello" />
