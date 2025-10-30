<script lang="ts">
	const { class: className, children, ...rest } = $props();
</script>

<h2 class={['h2 mt-8 first:mt-0', className]} {...rest}>
	{@render children?.()}
</h2>
