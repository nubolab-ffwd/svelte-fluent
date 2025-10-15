<script>
	import { useLocalize } from '@nubolab-ffwd/svelte-fluent';
	const localize = useLocalize();
</script>

<button onclick={() => window.prompt(localize('prompt'), localize('prompt.default'))}>
	Show prompt
</button>
