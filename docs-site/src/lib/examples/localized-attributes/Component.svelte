<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
</script>

<Localized id="confirm">
	{#snippet children({ text, attrs })}
		<div>{text}</div>
		<div>
			<button onclick={() => alert('OK clicked')}>{attrs.ok}</button>
			<button onclick={() => alert('Cancel clicked')}>{attrs.cancel}</button>
		</div>
	{/snippet}
</Localized>
