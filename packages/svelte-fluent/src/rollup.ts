import type { Plugin as RollupPlugin } from 'rollup';
import svelteFluentVite, {
	type SvelteFluentVitePlugin,
	type PluginOptions as VitePluginOptions
} from './vite.js';
import type { Satisfy } from './utils.js';

export type PluginOptions = VitePluginOptions;
export type SvelteFluentRollupPlugin = Satisfy<RollupPlugin, SvelteFluentVitePlugin>;

const plugin: (options: PluginOptions) => SvelteFluentRollupPlugin = svelteFluentVite;

export default plugin;
