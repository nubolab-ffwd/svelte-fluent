<script lang="ts">
	import type { FluentVariable } from '@fluent/bundle';

	import { stores } from './FluentProvider.svelte';
	export let id: string;
	export let args: Record<string, FluentVariable> | undefined = undefined;

	const { getTranslation } = stores();
	$: translation = $getTranslation(id, args);
</script>

<slot text={translation.value} attrs={translation.attributes}>
	{translation.value}
</slot>
