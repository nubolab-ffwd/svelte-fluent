import type { LayoutLoad, LayoutLoadEvent } from './$types';
import { headings as gettingStartedHeadings } from './getting-started/+page.svelte.md';
import { headings as tutorialHeadings } from './tutorial/+page.svelte.md';
import { headings as advancedHeadings } from './advanced/+page.svelte.md';
import { headings as version2Headings } from './version-2/+page.svelte.md';
import { headings as frameworksHeadings } from './frameworks/+page.svelte.md';
import { submenu as referenceSubmenu } from './reference/menu';
import type { Item as MenuItem, TopLeveltem as TopLevelMenultem } from './Menu.svelte';
import { base } from '$app/paths';
import { findActiveMenuItem, type Menu } from './menu';

type Heading = { text: string; id: string; rank: number };

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
				inPage: true
			};
		});
}

export const load = (async (ev) => {
	const menu: Menu = [
		buildMenu(ev, base + '/docs/getting-started/', gettingStartedHeadings, 1),
		buildMenu(ev, base + '/docs/version-2/', version2Headings, 1),
		buildMenu(ev, base + '/docs/frameworks/', frameworksHeadings, 1),
		buildMenu(ev, base + '/docs/tutorial/', tutorialHeadings, 1),
		buildMenu(ev, base + '/docs/advanced/', advancedHeadings, 1),
		{
			text: 'Reference',
			href: base + '/docs/reference/',
			submenu: referenceSubmenu
		}
	];
	const active = findActiveMenuItem(menu, ev.url.pathname);
	const title =
		active.submenu?.title ??
		active.submenu?.text ??
		active.menu?.title ??
		active.menu?.text ??
		'Documentation';

	return {
		menu,
		seo: { title, description: title }
	};
}) satisfies LayoutLoad;
