import { defaultHighlighter } from '$site/highlight';
import type { LayoutLoad } from './$types';

export const load = (async () => {
	return {
		highlighter: await defaultHighlighter
	};
}) satisfies LayoutLoad;
