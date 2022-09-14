<script>
	import { Overlay } from '@nubolab-ffwd/svelte-fluent';
	export let productName;
</script>

<Overlay id="info" args={{ productName }}>
	<a data-l10n-name="release-notes" href="https://example.com/" target="_blank"
		><!-- text from FTL file gets inserted here --></a
	>
</Overlay>
