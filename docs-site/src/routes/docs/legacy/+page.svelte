<script lang="ts">
	import { submenu } from './menu';
</script>

<h1>Legacy</h1>

<ul>
	{#each submenu as item (item)}
		<li>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={item.href}>{item.text}</a>
		</li>
	{/each}
</ul>
