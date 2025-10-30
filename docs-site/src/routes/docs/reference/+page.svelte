<script lang="ts">
	import { submenu } from './menu';
</script>

<h1 class="h1">Reference</h1>

<ul class="list-disc space-y-2 ps-8">
	{#each submenu as item (item)}
		<li>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a class="anchor" href={item.href}>{item.text}</a>
		</li>
	{/each}
</ul>
