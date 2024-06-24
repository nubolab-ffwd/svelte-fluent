<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { createSvelteFluent, initFluentContext, Localized } from '@nubolab-ffwd/svelte-fluent';

	const translations = `
empty =
	.text = Some text
`;
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<Localized id="empty">
	{#snippet children({ attrs })}
		{attrs.text}
	{/snippet}
</Localized>
