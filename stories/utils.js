import { FluentBundle, FluentResource } from '@fluent/bundle';
import { negotiateLanguages } from '@fluent/langneg';

export function* generateBundles(resourceData, defaultLocale, locale) {
	const resources = Object.fromEntries(
		Object.entries(resourceData).map(([k, data]) => [k, new FluentResource(data)])
	);
	const currentLocales = negotiateLanguages([locale], Object.keys(resources), {
		defaultLocale
	});
	for (const locale of currentLocales) {
		const bundle = new FluentBundle(locale);
		bundle.addResource(resources[locale]);
		yield bundle;
	}
}
