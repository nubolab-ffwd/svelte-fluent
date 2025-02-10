import type { Plugin as RollupPlugin } from 'rollup';
import svelteFluentVite, {
	type SvelteFluentVitePlugin,
	type PluginOptions as VitePluginOptions
} from './vite.js';
import type { HookFunction, Satisfy } from './utils.js';

export type PluginOptions = VitePluginOptions & {
	ssr?: boolean;
};

export type SvelteFluentRollupPlugin = Satisfy<
	RollupPlugin,
	SvelteFluentVitePlugin & {
		buildStart: HookFunction<NonNullable<RollupPlugin['buildStart']>>;
	}
>;

const defaultOptions = {
	resourceExtensions: ['.ftl'],
	ssr: false
};

export default (options: Partial<PluginOptions> = defaultOptions): SvelteFluentRollupPlugin => {
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
