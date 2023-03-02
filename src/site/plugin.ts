import type { ResolvedId } from 'rollup';
import type { Plugin as VitePlugin } from 'vite';

// this basically does the same as $lib/rollup-plugin.js but with different paths
const ssrResolvePlugin: () => VitePlugin = () => {
	let resolveResult: Promise<ResolvedId | null>;

	return {
		name: 'ssr-resolve',
		enforce: 'pre',

		async resolveId(source, _, opts) {
			if (!opts.ssr) {
				return;
			}
			if (source === '/src/lib/index.ts') {
				if (!resolveResult) {
					resolveResult = this.resolve('/src/lib/ssr.ts');
				}
				return await resolveResult;
			}
		}
	};
};

export default ssrResolvePlugin;
