import type { LayoutLoad } from './$types';
import { headings as gettingStartedHeadings } from './getting-started/+page.svelte.md';
import { headings as tutorialHeadings } from './tutorial/+page.svelte.md';
import { headings as referenceHeadings } from './reference/+page.svelte.md';
import type { Item as MenuItem } from './SidebarMenu.svelte';
import { base } from '$app/paths';

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

export const load = (async (ev) => {
	const menu = [
		buildMenu(base + '/docs/getting-started', gettingStartedHeadings, 1),
		buildMenu(base + '/docs/tutorial', tutorialHeadings, 1),
		buildMenu(base + '/docs/reference', referenceHeadings, 1)
	];
	const title =
		menu.find((x) => x.href && ev.url.pathname.startsWith(x.href))?.text ?? 'Documentation';
	return {
		menu,
		seo: { title, description: title }
	};
}) satisfies LayoutLoad;
