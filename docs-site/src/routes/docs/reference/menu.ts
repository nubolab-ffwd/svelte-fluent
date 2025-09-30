import { resolve } from '$app/paths';
import type { RouteId } from '$app/types';

const stripPrefix = (str: string, prefix: string) =>
	str.startsWith(prefix) ? str.slice(prefix.length) : str;
const stripSuffix = (str: string, suffix: string) =>
	str.endsWith(suffix) ? str.slice(0, -suffix.length) : str;

export const pages = Object.fromEntries(
	Object.entries(import.meta.glob('./*/+page.svelte.md', { import: 'metadata', eager: true })).map(
		([name, metadata]) => [
			stripSuffix(stripPrefix(name, './'), '/+page.svelte.md'),
			metadata as Record<string, string>
		]
	)
);

export const submenu = Object.entries(pages).map(([path, metadata]) => ({
	text: metadata?.menuTitle ?? metadata?.title,
	title: metadata?.title,
	href: resolve(`/docs/reference/${path}/` as RouteId)
}));
