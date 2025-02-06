<script>
	import { getFluentContext } from '@nubolab-ffwd/svelte-fluent';
	const { localize } = getFluentContext();
	const name = 'World';
</script>

<button onclick={() => window.alert(localize('hello', { name }))}>Say hello</button>
