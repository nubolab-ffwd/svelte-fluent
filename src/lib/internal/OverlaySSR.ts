import type { FluentVariable } from '@fluent/bundle';
import { JSDOM } from 'jsdom';
import Overlay from './Overlay.svelte';
import { translateElement } from './utils';
import { getInternalFluentContext } from './context.svelte';

type Props = {
	id: string;
	args?: Record<string, FluentVariable>;
};

function OverlaySSR($$payload: { out: string; [x: string]: unknown }, $$props: Props) {
	const savedOut = $$payload.out;
	$$payload.out = '';
	// @ts-expect-error Overlay is resolved to the non-SSR type
	const res = Overlay($$payload, $$props);
	const { id, args } = $$props;
	const { getTranslation } = getInternalFluentContext();
	const translation = getTranslation(id, args, true);
	const frag = JSDOM.fragment($$payload.out);
	const rootNode = frag.firstElementChild;
	if (rootNode) {
		translateElement(rootNode, translation);
	}
	$$payload.out = savedOut + (rootNode?.outerHTML ?? '');
	return res;
}

export default OverlaySSR;
