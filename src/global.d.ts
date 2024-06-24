import { ImageMetadata } from 'imagetools-core';

declare module '*.svelte.md' {
	const component: SvelteComponentTyped;
	export const metadata: unknown;
	export const headings: { rank: number; text: string; id: string }[];

	export default component;
}

declare module '*?raw&highlight' {
	const src: string;
	export default src;
}

declare module '*&as=metadata&imagetools' {
	const outputs: ImageMetadata;
	export default outputs;
}

declare module '*&imagetools' {
	const outputs: string;
	export default outputs;
}
