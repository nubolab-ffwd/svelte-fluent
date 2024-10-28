<script lang="ts" module>
	export type Item = {
		text: string;
		href?: string;
	};
	export type TopLeveltem = Item & { submenu?: Item[] };
</script>

<script lang="ts">
	import SidebarMenu from './SidebarMenu.svelte';
	let { items }: { items: TopLeveltem[] } = $props();
</script>

<ul>
	{#each items as { text, href, submenu }}
		<li class:has-submenu={!!submenu}>
			<span class="item">
				{#if href}<a {href}>{text}</a>{:else}{text}{/if}
			</span>
			{#if submenu}
				<SidebarMenu items={submenu} />
			{/if}
		</li>
	{/each}
</ul>

<style lang="postcss">
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		& > li.has-submenu {
			& + li {
				margin-block-start: var(--s1);
			}
			& > .item {
				text-transform: uppercase;
				font-variation-settings: 'wght' 570;
				letter-spacing: 0.1em;
				& a {
					all: inherit;
					cursor: pointer;
				}
			}
		}
		& .item {
			color: var(--theme-color-gray-dark);
			& a {
				color: inherit;
			}
		}
	}
</style>
