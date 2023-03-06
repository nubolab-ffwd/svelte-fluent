<script>
	import { localize } from '@nubolab-ffwd/svelte-fluent';
	const name = 'World';
</script>

<button on:click={() => window.alert($localize('hello', { name }))}>Say hello</button>
