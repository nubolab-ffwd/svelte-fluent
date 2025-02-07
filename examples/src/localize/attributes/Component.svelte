<script>
	import { getFluentContext } from '@nubolab-ffwd/svelte-fluent';
	const { localize } = getFluentContext();
</script>

<button onclick={() => window.prompt(localize('prompt'), localize('prompt.default'))}>
	Show prompt
</button>
