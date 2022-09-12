<script>
	import { FluentProvider, Overlay } from '@nubolab-ffwd/svelte-fluent';
	import { generateBundles } from '../utils';
	export let locale;
	const bundles = generateBundles(
		{
			de: 'info = Weitere Informationen finden Sie in der <a data-l10n-name="link">Dokumentation</a>.',
			en: 'info = Read the <a data-l10n-name="link">documentation</a> for more information.'
		},
		'en',
		locale
	);
</script>

<FluentProvider {bundles}>
	<Overlay id="info">
		<a data-l10n-name="link" href="https://example.com/"><!-- prevent a11y warning --></a>
	</Overlay>
</FluentProvider>
