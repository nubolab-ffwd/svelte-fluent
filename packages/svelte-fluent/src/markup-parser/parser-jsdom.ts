import { JSDOM } from 'jsdom';
import { type Parser } from './types.js';
import { createDomParseImpl } from './parser-dom.js';

export const createJsDomParser = (): Parser => {
	const dom = new JSDOM();
	return {
		type: 'jsdom',
		parse: createDomParseImpl({
			Node: dom.window.Node,
			document: dom.window.document
		})
	};
};
