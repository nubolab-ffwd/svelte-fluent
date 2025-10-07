import { createFilter, type FilterPattern } from '@rollup/pluginutils';
import type { Plugin as VitePlugin } from 'vite';
import { readFileSync } from 'node:fs';
import type { HookFunction, Satisfy } from './utils.js';

export type PluginOptions = {
	include?: FilterPattern;
	exclude?: FilterPattern;
	resourceExtensions: string[];
	skipJsdomCheck: boolean;
};

export type SvelteFluentVitePlugin = Satisfy<
	VitePlugin,
	Required<Pick<VitePlugin, 'name' | 'enforce'>> & {
		[K in 'buildStart' | 'transform']: HookFunction<NonNullable<VitePlugin[K]>>;
	}
>;

const defaultOptions = {
	resourceExtensions: ['.ftl'],
	skipJsdomCheck: false
} satisfies PluginOptions;

export default (options: Partial<PluginOptions> = defaultOptions): SvelteFluentVitePlugin => {
	const opts = { ...defaultOptions, ...options };
	const filter = createFilter(options.include, options.exclude);

	return {
		name: 'svelte-fluent',
		enforce: 'pre',

		buildStart() {
			if (opts.skipJsdomCheck) {
				return;
			}
			const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
			const deps = pkg.dependencies ?? {};
			if (!Object.prototype.hasOwnProperty.call(deps, 'jsdom')) {
				this.error(
					'The svelte-fluent plugin requires jsdom in your package.json dependencies. ' +
						'Please add it with e.g. `npm install --save jsdom`.'
				);
			}
		},

		transform(content, id) {
			if (!filter(id)) {
				return null;
			}
			if (!opts.resourceExtensions.some((ext) => id.toLocaleLowerCase().endsWith(ext))) {
				return null;
			}
			const code = [
				"import { FluentResource } from '@fluent/bundle';",
				`const data = ${JSON.stringify(content)};`,
				'export default new FluentResource(data);'
			].join('\n');
			return {
				code,
				map: { mappings: '' }
			};
		}
	};
};
