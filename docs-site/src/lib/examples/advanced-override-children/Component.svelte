<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
</script>

<p>
	<Localized id="search-input" tag="input">
		{#snippet children({ attributes })}
			<input type="search" {...attributes} />
		{/snippet}
	</Localized>
</p>

<p>
	<Localized id="privacy-policy" tag="a">
		{#snippet children({ attributes, content })}
			<a {...attributes} href="https://example.com/privacy" rel="external" target="_blank">
				{@render content()}
			</a>
		{/snippet}
	</Localized>
</p>
