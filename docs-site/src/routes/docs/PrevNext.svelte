<script lang="ts">
	import type { Item, TopLeveltem } from './Menu.svelte';

	let {
		menu,
		activeMenuItem,
		activeSubmenuItem
	}: { menu: TopLeveltem[]; activeMenuItem?: TopLeveltem; activeSubmenuItem?: Item } = $props();

	let currentMenu = $derived(activeSubmenuItem ? (activeMenuItem?.submenu ?? []) : menu);
	let parentMenu = $derived(activeSubmenuItem && menu);

	let currentItem = $derived(activeSubmenuItem ?? activeMenuItem);
	let parentItem = $derived(activeSubmenuItem && activeMenuItem);

	let currentItemIdx = $derived(currentItem ? currentMenu.indexOf(currentItem) : 0);
	let parentItemIdx = $derived(parentItem && parentMenu ? parentMenu.indexOf(parentItem) : 0);

	let prev = $derived(
		currentItemIdx > 0
			? currentMenu[currentItemIdx - 1]
			: parentMenu && parentItemIdx > 0
				? parentMenu[parentItemIdx - 1]
				: null
	);
	let next = $derived(
		currentMenu.length > currentItemIdx + 1
			? currentMenu[currentItemIdx + 1]
			: parentMenu && parentMenu.length > parentItemIdx + 1
				? parentMenu[parentItemIdx + 1]
				: null
	);
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
