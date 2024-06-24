import { createFilter, type FilterPattern } from '@rollup/pluginutils';
import type { ResolvedId } from 'rollup';
import type { Plugin as VitePlugin } from 'vite';

export type PluginOptions = {
	include?: FilterPattern;
	exclude?: FilterPattern;
	resourceExtensions: string[];
};

const defaultOptions = {
	resourceExtensions: ['.ftl']
} satisfies PluginOptions;

function debug(...args: unknown[]) {
	if (process.env.DEBUG) {
		console.debug(...args);
	}
}

export default (options: PluginOptions = defaultOptions) => {
	options = { ...defaultOptions, ...options };
	let resolveResult: Promise<ResolvedId | null>;
	const filter = createFilter(options.include, options.exclude);

	return {
		name: 'svelte-fluent',
		enforce: 'pre',

		async resolveId(source, importer, opts) {
			const ssr = opts?.ssr;
			if (ssr && source === '@nubolab-ffwd/svelte-fluent') {
				if (!resolveResult) {
					resolveResult = this.resolve('@nubolab-ffwd/svelte-fluent/ssr', importer, {
						skipSelf: true
					});
				}
				try {
					const resolved = await resolveResult;
					debug('resolved @nubolab-ffwd/svelte-fluent to @nubolab-ffwd/svelte-fluent/ssr');
					return resolved;
				} catch (err) {
					debug(
						'failed to resolve @nubolab-ffwd/svelte-fluent to @nubolab-ffwd/svelte-fluent/ssr',
						err
					);
					return null; // returning null here leads to @nubolab-ffwd/svelte-fluent getting resolved regularly
				}
			}
		},

		transform(content, id) {
			if (!filter(id)) {
				return null;
			}
			if (!options.resourceExtensions.some((ext) => id.toLocaleLowerCase().endsWith(ext))) {
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
	} satisfies VitePlugin;
};
