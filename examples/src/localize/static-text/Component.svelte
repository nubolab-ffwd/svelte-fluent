<script>
	import { useLocalize } from '@nubolab-ffwd/svelte-fluent';
	const localize = useLocalize();
</script>

<button onclick={() => window.alert(localize('hello'))}>Say hello</button>
