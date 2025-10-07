<script>
	import { useLocalize } from '@nubolab-ffwd/svelte-fluent';
	const localize = useLocalize();
	const name = 'World';
</script>

<button onclick={() => window.alert(localize('hello', { name }))}>Say hello</button>
