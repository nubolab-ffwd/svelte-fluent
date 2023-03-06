<script lang="ts">
	import type { FluentVariable } from '@fluent/bundle';
	import { getTranslation } from './stores';

	export let id: string;
	export let args: Record<string, FluentVariable> | undefined = undefined;

	$: translation = $getTranslation(id, args);
</script>

<slot text={translation.value} attrs={translation.attributes}>
	{translation.value}
</slot>
