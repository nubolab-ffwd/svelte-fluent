<script lang="ts">
	import CodeBox from '$lib/CodeBox.svelte';

	const { class: className, children, ...rest } = $props();
</script>

<CodeBox title={rest['data-title']}>
	<pre class={className} {...rest}>{@render children?.()}</pre>
</CodeBox>
