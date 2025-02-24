<script lang="ts" module>
	export type Item = {
		text: string;
		href?: string;
	};
	export type TopLeveltem = Item & { submenu?: Item[] };
</script>

<script lang="ts">
	import Menu from './Menu.svelte';
	let { items, toplevel = true }: { items: TopLeveltem[]; toplevel?: boolean } = $props();
</script>

<div class="menu" class:toplevel>
	<ul>
		{#each items as { text, href, submenu }}
			<li>
				<div class="item" class:has-submenu={!!submenu}>
					{#if href}<a {href}>{text}</a>{:else}{text}{/if}
				</div>
				{#if submenu}
					<Menu items={submenu} toplevel={false} />
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	@media (--viewport-sm) {
		.menu:is(:not(.toplevel)) {
			display: none;
		}
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;

		@media (--viewport-sm) {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: calc(0.5 * var(--space));
		}
	}
	.menu.toplevel > ul > li + li {
		margin-block-start: var(--s1);
		@media (--viewport-sm) {
			margin-block-start: 0;
		}
	}
	.item {
		color: var(--theme-color-gray-dark);
		& a {
			color: inherit;
		}
		&.active,
		&.active a {
			font-variation-settings: 'wght' 530;
			color: var(--theme-color-text);
		}
		&.has-submenu {
			text-transform: uppercase;
			letter-spacing: 0.1em;
			&,
			& a {
				font-variation-settings: 'wght' 570;
			}
			& a {
				cursor: pointer;
			}
		}
		@media (--viewport-sm) {
			& a {
				display: block;
				padding: calc(0.5 * var(--space)) var(--space);
			}
			border-bottom: 1px solid transparent;
			&.active {
				border-bottom-color: var(--theme-color-text);
			}
		}
	}
</style>
