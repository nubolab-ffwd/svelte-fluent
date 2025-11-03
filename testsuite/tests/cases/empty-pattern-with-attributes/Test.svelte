<script>
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { createSvelteFluent, setSvelteFluent, Localized } from '@nubolab-ffwd/svelte-fluent';

	const translations = `
empty =
	.text = Some text
`;
	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));

	setSvelteFluent(() => createSvelteFluent([bundle]));
</script>

<Localized id="empty">
	{#snippet children({ attrs })}
		{attrs.text}
	{/snippet}
</Localized>
