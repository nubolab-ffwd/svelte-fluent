<script lang="ts">
	const { class: className, children, ...rest } = $props();
</script>

<code
	class={[
		'code',
		'in-[h1,h2,h3,h4,h5,h6]:bg-surface-100-900! in-[h1,h2,h3,h4,h5,h6]:text-[0.9em]! in-[h1,h2,h3,h4,h5,h6]:text-inherit!',
		className
	]}
	{...rest}>{@render children?.()}</code
>
