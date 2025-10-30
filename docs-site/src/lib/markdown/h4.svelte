<script lang="ts">
	const { class: className, children, ...rest } = $props();
</script>

<h4 class={['h4', className]} {...rest}>
	{@render children?.()}
</h4>
