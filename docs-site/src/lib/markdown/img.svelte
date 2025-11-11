<script lang="ts">
	const { class: className, ...rest } = $props();
</script>

<img class={['rounded-sm shadow-md', className]} {...rest} />
