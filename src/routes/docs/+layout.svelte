<script lang="ts">
	import { headings as gettingStartedHeadings } from './getting-started/+page.svelte.md';
	import { headings as tutorialHeadings } from './tutorial/+page.svelte.md';
	import { headings as componentsHeadings } from './components/+page.svelte.md';
	import SidebarMenu, { type Item as MenuItem } from './SidebarMenu.svelte';
	import PrevNext from './PrevNext.svelte';

	$: menu = [
		buildMenu('/docs/getting-started', gettingStartedHeadings, 1),
		buildMenu('/docs/tutorial', tutorialHeadings, 1),
		buildMenu('/docs/components', componentsHeadings, 1)
	];

	type Heading = { text: string; id: string; rank: number };

	function buildMenu(baseHref: string, headings: Heading[], toplevelRank: number): MenuItem {
		const topHeading = headings.find((h) => h.rank === toplevelRank);
		return {
			text: topHeading?.text ?? '',
			href: baseHref,
			submenu: buildHeadingSubmenu(baseHref, headings, toplevelRank + 1)
		};
	}

	function buildHeadingSubmenu(baseHref: string, headings: Heading[], rank: number): MenuItem[] {
		return headings
			.filter((h) => h.rank === rank)
			.map((h) => ({
				text: h.text,
				href: `${baseHref}#${h.id}`
			}));
	}
</script>

<div class="docs with-sidebar wrap-reverse">
	<aside>
		<nav aria-label="Docs">
			<SidebarMenu items={menu} />
		</nav>
	</aside>
	<div class="content">
		<div class="stack center with-gutters">
			<main class="stack"><slot /></main>
			<hr />
			<PrevNext {menu} />
		</div>
	</div>
</div>

<style lang="postcss">
	nav {
		padding-inline: var(--space);
	}
	main {
		margin-block-end: calc(var(--space) * 5);
	}
	hr {
		margin-block-start: 0;
	}
</style>
