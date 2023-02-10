<script lang="ts" context="module">
	// navigator.languages is used in some examples, needs to be "polyfilled" for SSR
	if (!('navigator' in globalThis)) {
		globalThis['navigator'] = { languages: [] } as unknown as Navigator;
	}
</script>

<script lang="ts">
	import { headings as gettingStartedHeadings } from './getting-started/+page.svelte.md';
	import { headings as tutorialHeadings } from './tutorial/+page.svelte.md';
	import { headings as componentsHeadings } from './components/+page.svelte.md';
	import SidebarMenu, { type Item as MenuItem } from './_SidebarMenu.svelte';

	$: menu = [
		{
			text: 'Getting started',
			href: '/docs/getting-started',
			submenu: buildHeadingSubmenu('/docs/getting-started', gettingStartedHeadings, 2)
		},
		{
			text: 'Tutorial',
			href: '/docs/tutorial',
			submenu: buildHeadingSubmenu('/docs/tutorial', tutorialHeadings, 2)
		},
		{
			text: 'Components',
			href: '/docs/components',
			submenu: buildHeadingSubmenu('/docs/components', componentsHeadings, 2)
		}
	];

	type Heading = { text: string; id: string; rank: number };
	function buildHeadingSubmenu(baseHref: string, headings: Heading[], rank: number): MenuItem[] {
		return headings
			.filter((h) => h.rank === rank)
			.map((h) => ({
				text: h.text,
				href: `${baseHref}#${h.id}`
			}));
	}
</script>

<div class="with-sidebar wrap-reverse">
	<aside>
		<nav aria-label="Docs">
			<SidebarMenu items={menu} />
		</nav>
	</aside>
	<div>
		<div class="center with-gutters">
			<div class="stack"><slot /></div>
		</div>
	</div>
</div>

<style lang="postcss">
	nav {
		padding-inline: var(--space);
	}
</style>
