import type { FluentVariable } from '@fluent/bundle';
import { JSDOM } from 'jsdom';
import { get } from 'svelte/store';
import Overlay from './Overlay.svelte';
import { getTranslation } from './stores';
import { translateElement } from './utils';

type Props = {
	id: string;
	args?: Record<string, FluentVariable>;
};

const OverlaySSR = {
	...Overlay,
	$$render(result: unknown, props: Props, ...rest: unknown[]) {
		// @ts-expect-error resolved type for Overlay misses $$render which is only present in SSR code generation
		const html = Overlay.$$render.call(this, result, props, ...rest);
		const { id, args } = props;
		const $getLocalizedMessage = get(getTranslation);
		const translation = $getLocalizedMessage(id, args);
		const frag = JSDOM.fragment(html);
		const rootNode = frag.firstElementChild;
		if (rootNode) {
			translateElement(rootNode, translation);
		}
		return rootNode?.outerHTML ?? '';
	}
};

export default OverlaySSR;
