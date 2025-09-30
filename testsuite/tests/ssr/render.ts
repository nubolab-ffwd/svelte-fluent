import type { Component, ComponentProps, SvelteComponent } from 'svelte';
import { render } from 'svelte/server';

type RenderSyncResult = {
	head: string;
	body: string;
	html: string;
};

export function renderSync<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Comp extends SvelteComponent<any> | Component<any>,
	Props extends ComponentProps<Comp> = ComponentProps<Comp>
>(...args: Parameters<typeof render<Comp, Props>>): RenderSyncResult {
	const res = render<Comp, Props>(...args);
	return {
		body: res.body,
		head: res.head,
		html: res.html
	};
}
