<script>
	import { getFluentContext } from '@nubolab-ffwd/svelte-fluent';
	const { localize } = getFluentContext();
</script>

<button onclick={() => window.alert(localize('hello'))}>Say hello</button>
