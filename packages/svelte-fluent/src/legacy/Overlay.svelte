<script lang="ts">
	import type { FluentVariable } from '@fluent/bundle';
	import { Overlay } from '../index.js';

	let {
		id,
		args
	}: {
		id: string;
		args?: Record<string, FluentVariable> | undefined;
	} = $props();
</script>

<Overlay {id} {args}>
	<slot />
</Overlay>
