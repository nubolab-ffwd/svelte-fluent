<script lang="ts">
	const { class: className, children, ...rest } = $props();
</script>

<li class={className} {...rest}>
	{@render children?.()}
</li>
