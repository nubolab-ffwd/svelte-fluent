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
			<span class="item">
				{#if href && !submenu}<a {href}>{text}</a>{:else}{text}{/if}
			</span>
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
			& > .item {
				text-transform: uppercase;
				font-variation-settings: 'wght' 570;
				letter-spacing: 0.1em;
			}
		}
		& .item a {
			color: var(--theme-color-gray-dark);
		}
	}
</style>
