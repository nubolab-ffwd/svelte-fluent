<script lang="ts">
	import { submenu } from './menu';
</script>

<h1>Frameworks</h1>

<p>
	While svelte-fluent is framework-agnostic, these guides provide step-by-step instructions and best
	practices for integrating it seamlessly with your favorite frameworks.
</p>

<ul>
	{#each submenu as item (item)}
		<li>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={item.href}>{item.text}</a>
		</li>
	{/each}
</ul>
