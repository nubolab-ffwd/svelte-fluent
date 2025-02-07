import type { Plugin as RollupPlugin } from 'rollup';
import svelteFluentVite, { type PluginOptions as VitePluginOptions } from './vite.js';

export type PluginOptions = VitePluginOptions & {
	ssr?: boolean;
};

const defaultOptions = {
	resourceExtensions: ['.ftl'],
	ssr: false
};

export default (options: Partial<PluginOptions> = defaultOptions): RollupPlugin => {
	const resolvedOptions = { ...defaultOptions, ...options };
	const vitePlugin = svelteFluentVite(resolvedOptions);

	return {
		...vitePlugin,
		resolveId(source, importer, opts) {
			return vitePlugin.resolveId.call(this, source, importer, {
				...opts,
				ssr: resolvedOptions.ssr
			});
		}
	};
};
