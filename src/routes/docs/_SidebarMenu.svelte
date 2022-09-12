<script lang="ts" context="module">
	export type Item = {
		text: string;
		href?: string;
		submenu?: Item[];
	};
</script>

<script lang="ts">
	export let items: Item[];
</script>

<ul>
	{#each items as { text, href, submenu }}
		<li>
			{#if href}<a {href}>{text}</a>{:else}{text}{/if}
			{#if submenu}
				<svelte:self items={submenu} />
			{/if}
		</li>
	{/each}
</ul>
