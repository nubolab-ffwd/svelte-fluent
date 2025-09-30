<script lang="ts">
	import { resolve } from '$app/paths';
	import type { RouteId } from '$app/types';
	let { name, legacy }: { name: string; legacy?: boolean } = $props();
</script>

<a href={resolve(`/docs/${legacy ? 'legacy' : 'reference'}/${name}/` as RouteId)}>
	{name}
</a>
