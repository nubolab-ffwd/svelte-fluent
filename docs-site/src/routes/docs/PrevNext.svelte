<script lang="ts">
	import type { MenuPath } from './menu';
	import type { Item, TopLeveltem } from './Menu.svelte';

	interface Props {
		menu: TopLeveltem[];
		activeMenuPath?: MenuPath;
		activeSubmenuItem?: Item;
	}
	let { menu, activeMenuPath }: Props = $props();

	let flatMenu = $derived(flattenMenu(menu));
	let activeFlatMenuPath = $derived.by(() => {
		const [activeTopIdx, activeSubIdx] = activeMenuPath ?? [];
		if (activeTopIdx === undefined) {
			return undefined;
		}
		return menu.entries().reduce((prev, [currentIdx, currentItem]) => {
			if (currentIdx < activeTopIdx) {
				prev += 1;
			}
			if (currentIdx < activeTopIdx && currentItem.submenu) {
				prev += currentItem.submenu.length;
			}
			if (currentIdx === activeTopIdx && activeSubIdx !== undefined && currentItem.submenu) {
				prev += 1;
				prev += activeSubIdx;
			}
			return prev;
		}, 0);
	});

	let prevIdx = $derived(
		activeFlatMenuPath !== undefined ? findPrevIndex(flatMenu, activeFlatMenuPath) : undefined
	);
	let nextIdx = $derived(
		activeFlatMenuPath !== undefined ? findNextIndex(flatMenu, activeFlatMenuPath) : undefined
	);

	let prev = $derived(prevIdx !== undefined ? flatMenu.at(prevIdx) : undefined);
	let next = $derived(nextIdx !== undefined ? flatMenu.at(nextIdx) : undefined);

	function flattenMenu(menu: TopLeveltem[] | Item[]): Item[] {
		return menu.flatMap((item) => {
			if ('submenu' in item && item.submenu) {
				const newItem = { ...item };
				delete newItem.submenu;
				return [newItem, ...flattenMenu(item.submenu)];
			}
			return [item];
		});
	}

	function findPrevIndex(menu: Item[], current: number): number | undefined {
		const res = menu
			.slice(0, current)
			.reverse()
			.findIndex((item) => item.href && !item.inPage);
		return res >= 0 ? current - 1 - res : undefined;
	}

	function findNextIndex(menu: Item[], current: number): number | undefined {
		const res = menu.slice(current + 1).findIndex((item) => item.href && !item.inPage);
		return res >= 0 ? current + 1 + res : undefined;
	}
</script>

<div class="prev-next">
	{#if prev}
		<a class="prev" href={prev?.href}>
			<span class="desc">Previous page</span>
			<span class="text">{prev?.text}</span>
		</a>
	{:else}
		<div></div>
	{/if}
	{#if next}
		<a class="next" href={next?.href}>
			<span class="desc">Next page</span>
			<span class="text">{next?.text}</span>
		</a>
	{:else}
		<div></div>
	{/if}
</div>

<style lang="postcss">
	.prev-next {
		display: flex;
		gap: var(--space);
		& * {
			max-inline-size: none;
		}
		& > * {
			flex: 1 1 50%;
			&:last-child {
				text-align: end;
			}
		}
		& a {
			border: 1px solid var(--theme-color-gray-light);
			padding: var(--space);
			border-radius: var(--s-2);

			&:hover {
				border-color: var(--theme-color-secondary-dark);
			}
			& .desc,
			& .text {
				display: block;
			}
			& .desc {
				color: var(--theme-color-gray-dark);
			}
			& .text {
				font-variation-settings: 'wght' 570;
			}
		}
	}
</style>
