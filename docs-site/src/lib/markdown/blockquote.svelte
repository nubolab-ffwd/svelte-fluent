<script lang="ts">
	const { class: className, children, ...rest } = $props();
</script>

<blockquote class={['blockquote my-2', className]} {...rest}>
	{@render children?.()}
</blockquote>
