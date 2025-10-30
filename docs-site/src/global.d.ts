declare module '*.svelte.md' {
	import type { Component } from 'svelte';

	const component: Component;
	export default component;

	export const metadata: {
		headings: { rank: number; text: string; id: string }[];
		[k: string]: unknown;
	};
}

declare module '*?raw&highlight' {
	const src: string;
	export default src;
}
