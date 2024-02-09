import { createFilter, type Plugin } from 'vite';
import { promises as fsp } from 'node:fs';
import { highlight } from './highlight';

type PluginOptions = {
	include: Array<string | RegExp> | string | RegExp;
	exclude: Array<string | RegExp> | string | RegExp;
};

const defaultOptions: PluginOptions = {
	include: '**/*',
	exclude: ''
};

export function parseURL(rawURL: string) {
	return new URL(rawURL.replace(/#/g, '%23'), 'file://');
}

const highlightRE = /(?:\?|&)highlight(?:&|$)/;
const queryRE = /\?.*$/s;
const hashRE = /#.*$/s;

const cleanUrl = (url: string): string => url.replace(hashRE, '').replace(queryRE, '');

function detectLanguage(name: string): string {
	if (name.endsWith('.svelte')) {
		return 'svelte';
	} else if (name.endsWith('.ftl')) {
		return 'ftl';
	}
	throw new Error(`Unsupported language for ${name}`);
}

export default function highlightPlugin(userOptions: Partial<PluginOptions>): Plugin {
	const pluginOptions: PluginOptions = { ...defaultOptions, ...userOptions };
	const filter = createFilter(pluginOptions.include, pluginOptions.exclude);

	return {
		name: 'highlight',
		enforce: 'pre',
		async load(id) {
			if (id.startsWith('\0')) {
				// Rollup convention, this id should be handled by the
				// plugin that marked it with \0
				return;
			}
			if (!filter(id)) return null;
			if (!highlightRE.test(id)) return null;

			const file = cleanUrl(id);
			const lang = detectLanguage(file);
			const source = await fsp.readFile(file, 'utf-8');
			const highlighted = await highlight(source, lang);

			return `export default ${JSON.stringify(highlighted)}`;
		}
	};
}
