import { createFilter, type FilterPattern } from '@rollup/pluginutils';
import type { ResolvedId } from 'rollup';
import type { Plugin as VitePlugin } from 'vite';
import { readFileSync } from 'node:fs';

export type PluginOptions = {
	include?: FilterPattern;
	exclude?: FilterPattern;
	resourceExtensions: string[];
	skipJsdomCheck: boolean;
};

const defaultOptions = {
	resourceExtensions: ['.ftl'],
	skipJsdomCheck: false
} satisfies PluginOptions;

export default (options: Partial<PluginOptions> = defaultOptions) => {
	const opts = { ...defaultOptions, ...options };
	let resolveResult: Promise<ResolvedId | null>;
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
					this.debug('resolved @nubolab-ffwd/svelte-fluent to @nubolab-ffwd/svelte-fluent/ssr');
					return resolved;
				} catch (err) {
					this.warn(
						`failed to resolve @nubolab-ffwd/svelte-fluent to @nubolab-ffwd/svelte-fluent/ssr: ${err}`
					);
					return null; // returning null here leads to @nubolab-ffwd/svelte-fluent getting resolved regularly
				}
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
	} satisfies VitePlugin;
};
