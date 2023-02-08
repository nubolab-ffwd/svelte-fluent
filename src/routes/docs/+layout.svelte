<script lang="ts" context="module">
	// navigator.languages is used in some examples, needs to be "polyfilled" for SSR
	if (!('navigator' in globalThis)) {
		globalThis['navigator'] = { languages: [] } as unknown as Navigator;
	}
</script>

<script lang="ts">
	import { headings as gettingStartedHeadings } from './getting-started/+page.svelte.md';
	import { headings as tutorialHeadings } from './tutorial/+page.svelte.md';
	import SidebarMenu, { type Item as MenuItem } from './_SidebarMenu.svelte';

	$: menu = [
		{
			text: 'Getting started',
			href: '/docs/getting-started',
			submenu: buildHeadingSubmenu('/docs/getting-started', gettingStartedHeadings)
		},
		{
			text: 'Tutorial',
			href: '/docs/tutorial',
			submenu: buildHeadingSubmenu('/docs/tutorial', tutorialHeadings)
		},
		{
			text: 'Components',
			submenu: [
				{ text: 'FluentProvider', href: '/docs/fluent-provider' },
				{ text: 'Localized', href: '/docs/localized' },
				{ text: 'Overlay', href: '/docs/overlay' }
			]
		}
	];

	type Heading = { text: string; id: string; rank: number };
	function buildHeadingSubmenu(baseHref: string, headings: Heading[], rank = 5): MenuItem[] {
		return headings
			.filter((h) => h.rank === rank)
			.map((h) => ({
				text: h.text,
				href: `${baseHref}#${h.id}`
			}));
	}
</script>

<div class="with-sidebar">
	<aside>
		<SidebarMenu items={menu} />
	</aside>
	<div>
		<div class="center">
			<div class="stack"><slot /></div>
		</div>
	</div>
</div>
