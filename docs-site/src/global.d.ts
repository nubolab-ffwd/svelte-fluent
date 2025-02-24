declare module '*.svelte.md' {
	import type { Component } from 'svelte';

	const component: Component;
	export default component;

	export const metadata: Record<string, unknown>;
	export const headings: { rank: number; text: string; id: string }[];
}

declare module '*?raw&highlight' {
	const src: string;
	export default src;
}
