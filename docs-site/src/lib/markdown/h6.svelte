<script lang="ts">
	const { class: className, children, ...rest } = $props();
</script>

<h6 class={['h6', className]} {...rest}>
	{@render children?.()}
</h6>
