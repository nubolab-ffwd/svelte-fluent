<script lang="ts">
	import type { MenuPath } from './menu';
	import type { Item, TopLeveltem } from './Menu.svelte';

	interface Props {
		menu: TopLeveltem[];
		activeMenuPath?: MenuPath;
	}
	let { menu, activeMenuPath }: Props = $props();

	let flatMenu = $derived(flattenMenu(menu));
	let activeFlatMenuPath = $derived.by(() => {
		const [activeTopIdx, activeSubIdx] = activeMenuPath ?? [];
		if (activeTopIdx === undefined) {
			return undefined;
		}
		return [...menu.entries()].reduce((prev, [currentIdx, currentItem]) => {
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

{#snippet link(title: string, text: string, href?: string, align: 'start' | 'end' = 'start')}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a
		{href}
		class={[
			'border-surface-200-800 hover:border-surface-400-600 flex flex-col gap-0 rounded border px-4 py-2',
			align === 'start' ? 'items-start' : 'items-end'
		]}
	>
		<span>{title}</span>
		<span class="text-(--anchor-font-color) dark:text-(--anchor-font-color-dark) font-semibold"
			>{text}</span
		>
	</a>
{/snippet}

<div class="grid grid-cols-2 gap-4">
	{#if prev}
		{@render link('Previous page', prev.text, prev.href)}
	{:else}
		<div></div>
	{/if}
	{#if next}
		{@render link('Next page', next.text, next.href, 'end')}
	{:else}
		<div></div>
	{/if}
</div>
