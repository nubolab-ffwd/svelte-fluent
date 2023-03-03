<script>
	import { localize } from '@nubolab-ffwd/svelte-fluent';
</script>

<button on:click={() => window.alert($localize('hello'))}>Say hello</button>
