import type { LayoutLoad, LayoutLoadEvent } from './$types';
import { headings as gettingStartedHeadings } from './getting-started/+page.svelte.md';
import { headings as tutorialHeadings } from './tutorial/+page.svelte.md';
import { headings as version1Headings } from './version-1/+page.svelte.md';
import { headings as integrationHeadings } from './integration/+page.svelte.md';
import { submenu as referenceSubmenu } from './reference/menu';
import { submenu as legacySubmenu } from './legacy/menu';
import type { Item as MenuItem, TopLeveltem as TopLevelMenultem } from './SidebarMenu.svelte';
import { base } from '$app/paths';

type Heading = { text: string; id: string; rank: number };
type Menu = (TopLevelMenultem & { title?: string; submenu?: (MenuItem & { title?: string })[] })[];

function buildMenu(
	ev: LayoutLoadEvent,
	baseHref: string,
	headings: Heading[],
	toplevelRank: number
): TopLevelMenultem {
	const topHeading = headings.find((h) => h.rank === toplevelRank);
	const href = baseHref;
	return {
		text: topHeading?.text ?? '',
		href,
		submenu: buildHeadingSubmenu(baseHref, headings, toplevelRank + 1)
	};
}

function buildHeadingSubmenu(baseHref: string, headings: Heading[], rank: number): MenuItem[] {
	return headings
		.filter((h) => h.rank === rank)
		.map((h) => {
			const href = `${baseHref}#${h.id}`;
			return {
				text: h.text,
				href,
				active: false
			};
		});
}

export const load = (async (ev) => {
	const menu: Menu = [
		buildMenu(ev, base + '/docs/getting-started', gettingStartedHeadings, 1),
		buildMenu(ev, base + '/docs/version-1', version1Headings, 1),
		buildMenu(ev, base + '/docs/tutorial', tutorialHeadings, 1),
		buildMenu(ev, base + '/docs/integration', integrationHeadings, 1),
		{
			text: 'Reference',
			href: base + '/docs/reference',
			submenu: referenceSubmenu
		},
		{
			text: 'Legacy',
			href: base + '/docs/legacy',
			submenu: legacySubmenu
		}
	];
	let activeMenuItem;
	let activeSubmenuItem;
	for (const item of menu) {
		if (item.href === ev.url.pathname) {
			activeMenuItem = item;
		}
		for (const subitem of item.submenu ?? []) {
			if (subitem.href === ev.url.pathname) {
				activeMenuItem = item;
				activeSubmenuItem = subitem;
			}
		}
		if (activeMenuItem) {
			break;
		}
	}

	const title =
		activeSubmenuItem?.title ??
		activeSubmenuItem?.text ??
		activeMenuItem?.title ??
		activeMenuItem?.text ??
		'Documentation';
	return {
		menu,
		activeMenuItem,
		activeSubmenuItem,
		seo: { title, description: title }
	};
}) satisfies LayoutLoad;
