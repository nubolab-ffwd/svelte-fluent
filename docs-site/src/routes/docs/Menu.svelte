<script lang="ts" module>
	export type Item = {
		text: string;
		href?: string;
		inPage?: boolean;
	};
	export type TopLeveltem = Item & { submenu?: Item[] };
</script>

<script lang="ts">
	import { tw } from '$lib/tailwind';

	import type { MenuPath } from './menu';

	import Menu from './Menu.svelte';
	interface Props {
		items: TopLeveltem[];
		activeMenuPath?: MenuPath;
		toplevel?: boolean;
	}
	let { items, activeMenuPath, toplevel = true }: Props = $props();
	let activeIdx = $derived(activeMenuPath?.at(0));

	const itemClassesTop = (active: boolean) => [
		tw`block font-mono uppercase tracking-widest py-1`,
		active && tw`font-bold`
	];
	const itemClasses = (active: boolean) => [
		tw`block pl-4 border-l-2 border-surface-200-800 py-1`,
		!active && tw`hover:border-surface-300-700`,
		active && tw`font-bold border-surface-400-600`
	];
</script>

<div class="menu">
	<ul class={[toplevel && 'space-y-8']}>
		{#each items as item, idx (item)}
			{@const classes = (toplevel ? itemClassesTop : itemClasses)(idx === activeIdx)}
			<li>
				{#if item.href}
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a class={classes} href={item.href}>{item.text}</a>
				{:else}
					<div class={classes}>
						{item.text}
					</div>
				{/if}
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
