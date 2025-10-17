<script>
	import { Localized, TagElement } from '@nubolab-ffwd/svelte-fluent';
</script>

<p>
	<Localized
		id="terms-of-service"
		elements={{
			'tos-link': new TagElement('a', {
				href: '/terms',
				target: '_blank',
				rel: 'noopener noreferrer'
			})
		}}
	/>
</p>
