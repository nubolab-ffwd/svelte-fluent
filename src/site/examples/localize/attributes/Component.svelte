<script>
	import { localize } from '@nubolab-ffwd/svelte-fluent';
</script>

<button on:click={() => window.prompt($localize('prompt'), $localize('prompt.default'))}>
	Show prompt
</button>
