<script>
	import { Localized as Overlay } from '@nubolab-ffwd/svelte-fluent';
	let { productName = 'Example Product' } = $props();
</script>

<Overlay id="info" args={{ productName }}>
	<a data-l10n-name="release-notes" href="https://example.com/" target="_blank" rel="noreferrer">
		<!-- text from FTL file gets inserted here -->
	</a>
</Overlay>
