<script lang="ts">
	import { submenu } from './menu';
</script>

<h1>Reference</h1>

<ul>
	{#each submenu as item}
		<li>
			<a href={item.href}>{item.text}</a>
		</li>
	{/each}
</ul>
