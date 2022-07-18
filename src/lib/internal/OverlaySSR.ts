import { get } from 'svelte/store';
import Overlay from './Overlay.svelte';
import { translateElement } from './utils';
import { stores } from './FluentProvider.svelte';
import { JSDOM } from 'jsdom';
import type { FluentVariable } from '@fluent/bundle';

type Props = {
	id: string;
	args?: Record<string, FluentVariable>;
};

const OverlaySSR = {
	...Overlay,
	$$render(result: unknown, props: Props, ...rest: unknown[]) {
		// @ts-expect-error resolved type for Overlay misses $$render which is only present in SSR code generation
		const html = Overlay.$$render.call(this, result, props, ...rest);
		const { getTranslation } = stores();
		const { id, args } = props;
		const $getTranslation = get(getTranslation);
		const translation = $getTranslation(id, args);
		const frag = JSDOM.fragment(html);
		const rootNode = frag.firstElementChild;
		if (rootNode) {
			translateElement(rootNode, translation);
		}
		return rootNode?.outerHTML ?? '';
	}
};

export default OverlaySSR;
