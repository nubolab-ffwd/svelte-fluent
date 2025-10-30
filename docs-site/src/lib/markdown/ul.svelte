<script lang="ts">
	const { class: className, children, ...rest } = $props();
</script>

<ul
	class={['in-[ul,ol]:list-[circle] in-[ul,ol]:mt-2 list-disc space-y-2 ps-8', className]}
	{...rest}
>
	{@render children?.()}
</ul>
