declare module '*.svelte.md' {
	const component: SvelteComponentTyped;
	export const metadata: any;
	export const headings: { rank: number; text: string; id: string }[];

	export default component;
}
