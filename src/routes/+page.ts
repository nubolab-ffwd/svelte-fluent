import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		seo: {
			title: 'The expressive Svelte localisation library',
			description: 'The expressive Svelte localisation library'
		}
	};
}) satisfies PageLoad;
