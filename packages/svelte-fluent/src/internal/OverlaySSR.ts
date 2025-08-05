import type { FluentVariable } from '@fluent/bundle';
import { JSDOM } from 'jsdom';
import Overlay from './Overlay.svelte';
import { translateElement } from './utils.js';
import { getInternalFluentContext } from './context.svelte';

type Props = {
	id: string;
	args?: Record<string, FluentVariable>;
};

type PayloadOutput = string | string[];
type Payload = {
	head: {
		title: string;
		out: PayloadOutput;
	};
	out: PayloadOutput;
	[x: string]: unknown;
};

const createEmptyOutput = (orig: PayloadOutput): PayloadOutput =>
	typeof orig === 'string' ? '' : [];
const getOutputAsString = (out: PayloadOutput): string =>
	typeof out === 'string' ? out : out.join('');
const replaceOutput = (out: PayloadOutput, content: string): PayloadOutput =>
	typeof out === 'string' ? content : [content];
const concatOutputs = (a: PayloadOutput, b: PayloadOutput): PayloadOutput => {
	if (typeof a === 'string') {
		return a + b;
	}
	return [...a, ...b];
};

function OverlaySSR($$payload: Payload, $$props: Props) {
	const savedOut = $$payload.out;
	const savedHeadOut = $$payload.head.out;
	$$payload.out = createEmptyOutput($$payload.out);
	$$payload.head.out = createEmptyOutput($$payload.head.out);
	// @ts-expect-error Overlay is resolved to the non-SSR type
	const res = Overlay($$payload, $$props);
	const { id, args } = $$props;
	const { getTranslation } = getInternalFluentContext();
	const translation = getTranslation(id, args, true);
	const headFragment = JSDOM.fragment(getOutputAsString($$payload.head.out));
	const bodyFragment = JSDOM.fragment(getOutputAsString($$payload.out));
	const templateNode = headFragment.firstElementChild as HTMLTemplateElement | null;
	const rootNode = bodyFragment.firstElementChild as HTMLElement | null;
	if (templateNode && rootNode && translation) {
		rootNode.innerHTML = '';
		rootNode.appendChild(templateNode.content.cloneNode(true));
		translateElement(rootNode, translation);
		$$payload.out = replaceOutput($$payload.out, rootNode.outerHTML);
	}
	$$payload.out = concatOutputs(savedOut, $$payload.out);
	$$payload.head.out = concatOutputs(savedHeadOut, $$payload.head.out);
	return res;
}

export default OverlaySSR;
