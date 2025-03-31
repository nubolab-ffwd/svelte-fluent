<script lang="ts" module>
	export type Item = {
		text: string;
		href?: string;
		inPage?: boolean;
	};
	export type TopLeveltem = Item & { submenu?: Item[] };
</script>

<script lang="ts">
	import type { MenuPath } from './menu';

	import Menu from './Menu.svelte';
	interface Props {
		items: TopLeveltem[];
		activeMenuPath?: MenuPath;
		toplevel?: boolean;
	}
	let { items, activeMenuPath, toplevel = true }: Props = $props();
	let activeIdx = $derived(activeMenuPath?.at(0));
</script>

<div class="menu" class:toplevel>
	<ul>
		{#each items as item, idx (item)}
			<li>
				<div class="item" class:has-submenu={!!item.submenu} class:active={idx == activeIdx}>
					{#if item.href}
						<a href={item.href}>{item.text}</a>
					{:else}
						{item.text}
					{/if}
				</div>
				{#if item.submenu}
					<Menu
						items={item.submenu}
						activeMenuPath={idx == activeIdx ? activeMenuPath?.slice(1) : undefined}
						toplevel={false}
					/>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	@media (--viewport-max-sm) {
		.menu:is(:not(.toplevel)) {
			display: none;
		}
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;

		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: calc(0.5 * var(--space));

		@media (--viewport-sm) {
			display: block;
		}
	}
	.menu.toplevel > ul > li + li {
		margin-block-start: 0;
		@media (--viewport-sm) {
			margin-block-start: var(--s1);
		}
	}
	.item {
		color: var(--theme-color-gray-dark);
		border-bottom: 1px solid transparent;
		& a {
			color: inherit;
			display: block;
			padding: calc(0.5 * var(--space)) var(--space);
		}
		&.active {
			border-bottom-color: var(--theme-color-text);
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
			border-bottom: none;
			& a {
				display: inline;
				padding: 0;
			}
		}
	}
</style>
