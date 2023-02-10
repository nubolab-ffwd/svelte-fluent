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

<style lang="postcss">
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: var(--s-1);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		& > li:has(ul) {
			& + li {
				margin-block-start: var(--s2, 1rem);
			}
			& > a {
				text-transform: uppercase;
				font-variation-settings: 'wght' 570;
				letter-spacing: 0.1em;
			}
		}
		& a {
			color: #555;
		}
	}
</style>
