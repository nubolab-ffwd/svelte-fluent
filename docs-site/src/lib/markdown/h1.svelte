<script lang="ts">
	const { class: className, children, ...rest } = $props();
</script>

<h1 class={['h1 mt-12 first:mt-0', className]} {...rest}>
	{@render children?.()}
</h1>
