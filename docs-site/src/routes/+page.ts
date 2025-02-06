import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		seo: {
			title: 'The expressive Svelte localization library',
			description: 'The expressive Svelte localization library'
		}
	};
}) satisfies PageLoad;
