<script>
	import { stores } from './FluentProvider.svelte';
	export let id;
	export let args = null;

	const { getTranslation } = stores();
	$: translation = $getTranslation(id, args);
</script>

<slot text={translation.value} attrs={translation.attributes}>
	{translation.value}
</slot>
