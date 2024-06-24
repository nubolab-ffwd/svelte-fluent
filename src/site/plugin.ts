import svelteFluentPlugin from '../lib/vite';
import type { Plugin as VitePlugin } from 'vite';

// this basically does the same as $lib/vite.ts but with different paths
const ssrResolvePlugin: () => VitePlugin = () => {
	const plugin = svelteFluentPlugin();

	return {
		...plugin,
		resolveId(source, ...args) {
			// override source from local dev server
			if (source === '/src/lib/index.ts') {
				source = '@nubolab-ffwd/svelte-fluent';
			}
			return plugin.resolveId.call(this, source, ...args);
		}
	};
};

export default ssrResolvePlugin;
