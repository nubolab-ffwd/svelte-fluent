<script>
	import { Overlay } from '@nubolab-ffwd/svelte-fluent';
	export let productName = 'Example Product';
</script>

<Overlay id="info" args={{ productName }}>
	<a data-l10n-name="release-notes" href="https://example.com/" target="_blank" rel="noreferrer">
		<!-- text from FTL file gets inserted here -->
	</a>
</Overlay>
