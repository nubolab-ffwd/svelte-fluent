<script>
	import { FluentBundle } from '@fluent/bundle';
	import { createSvelteFluent, initFluentContext, Localized } from '@nubolab-ffwd/svelte-fluent';
	import resourceEn from './en.ftl';

	const bundle = new FluentBundle('en');
	bundle.addResource(resourceEn);

	initFluentContext(() => createSvelteFluent([bundle]));
</script>

<p>
	<Localized id="important-notice" tag="strong" />
</p>

<p>
	<Localized id="privacy-policy" tag="a">
		{#snippet children({ attributes, translatedContent })}
			<a {...attributes} href="/privacy" rel="external" target="_blank">
				{@render translatedContent()}
			</a>
		{/snippet}
	</Localized>
</p>
