declare module '*.svelte.md' {
	const component: SvelteComponentTyped;
	export const metadata: unknown;
	export const headings: { rank: number; text: string; id: string }[];

	export default component;
}
