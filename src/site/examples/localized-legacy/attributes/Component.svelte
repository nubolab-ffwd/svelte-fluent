<script>
	import { Localized } from '@nubolab-ffwd/svelte-fluent/legacy';
</script>

<Localized id="confirm" let:text let:attrs>
	<div>{text}</div>
	<div>
		<button onclick={() => alert('OK clicked')}>{attrs.ok}</button>
		<button onclick={() => alert('Cancel clicked')}>{attrs.cancel}</button>
	</div>
</Localized>
