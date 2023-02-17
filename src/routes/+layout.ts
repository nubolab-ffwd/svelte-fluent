import { defaultHighlighter } from '$site/highlight';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load = (async () => {
	return {
		highlighter: await defaultHighlighter
	};
}) satisfies LayoutLoad;
