<script>
	import { Localized, TagElement } from '@nubolab-ffwd/svelte-fluent';
</script>

<p>
	<Localized
		id="link-with-extra-attributes"
		elements={{
			'external-link': new TagElement(
				'a',
				{ href: 'https://example.com' },
				{ allowAttributes: ['rel', 'target'] }
			)
		}}
	/>
</p>
