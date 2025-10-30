<script lang="ts">
	const { class: className, children, ...rest } = $props();
</script>

<h5 class={['h5', className]} {...rest}>
	{@render children?.()}
</h5>
