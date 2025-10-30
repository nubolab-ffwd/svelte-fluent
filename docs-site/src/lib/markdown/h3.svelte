<script lang="ts">
	const { class: className, children, ...rest } = $props();
</script>

<h3 class={['h3 mt-4 first:mt-0', className]} {...rest}>
	{@render children?.()}
</h3>
