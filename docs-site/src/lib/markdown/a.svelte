<script lang="ts">
	const { class: className, children, ...rest } = $props();
</script>

<a class={['anchor in-[h1,h2,h3,h4,h5,h6]:text-inherit', className]} {...rest}>
	{@render children?.()}
</a>
