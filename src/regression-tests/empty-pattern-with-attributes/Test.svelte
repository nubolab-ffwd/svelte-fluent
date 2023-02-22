<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';

	const translations = `
empty =
	.text = Some text
`;
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));
</script>

<FluentProvider bundles={[bundle]}>
	<Localized id="empty" let:attrs>
		{attrs.text}
	</Localized>
</FluentProvider>
