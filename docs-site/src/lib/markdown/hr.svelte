<script lang="ts">
	const { class: className, ...rest } = $props();
</script>

<hr class={['hr', className]} {...rest} />
