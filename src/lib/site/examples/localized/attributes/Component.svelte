<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
</script>

<Localized id="confirm" let:text let:attrs>
	<div>{text}</div>
	<div>
		<button on:click={() => alert('OK clicked')}>{attrs.ok}</button>
		<button on:click={() => alert('Cancel clicked')}>{attrs.cancel}</button>
	</div>
</Localized>
