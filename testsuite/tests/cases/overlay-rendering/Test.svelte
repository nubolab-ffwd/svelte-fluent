<script>
	import { Localized as Overlay } from '@nubolab-ffwd/svelte-fluent';
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { createSvelteFluent, initFluentContext } from '@nubolab-ffwd/svelte-fluent';

	const resource = new FluentResource(`
test = This <a data-l10n-name="link">link</a> is rendered with Overlay.
	`);

	const bundle = new FluentBundle('en');
	bundle.addResource(resource);

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<Overlay id="test">
	<a data-l10n-name="link" href="https://example.com/">
		<!-- text from translation gets inserted here -->
	</a>
</Overlay>
