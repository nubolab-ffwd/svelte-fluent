<script lang="ts">
	import { base } from '$app/paths';
	let { name, legacy }: { name: string; legacy?: boolean } = $props();
</script>

<a href={base + '/docs/' + (legacy ? 'legacy' : 'reference') + '/' + name}>
	{name}
</a>
