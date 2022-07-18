import type { Plugin } from 'vite';
import type { PluginContext, ResolvedId, ResolveIdResult } from 'rollup';

export type PluginOptions = {
	ssr?: boolean;
};

const defaultOptions = { ssr: false };

function debug(...args: string[]) {
	if (process.env.DEBUG) {
		console.debug(...args);
	}
}
export default function svelteFluentPlugin(options: PluginOptions = defaultOptions): Plugin {
	options = { ...defaultOptions, ...options };
	let resolvedSvelteFluentSSR: Promise<ResolvedId | null>;
	let isVite = false;

	return {
		name: 'svelte-fluent',
		enforce: 'pre',

		config() {
			isVite = true;
		},

		buildStart(this: PluginContext) {
			if (isVite && options.ssr) {
				this.warn(
					'Setting the `ssr` option is not necessary when using vite. The setting will be ignored.'
				);
			}
		},

		async resolveId(
			this: PluginContext,
			source: string,
			importer?: string,
			opts?: { ssr?: boolean },
			_ssr?: boolean
		): Promise<ResolveIdResult> {
			const ssr = _ssr === true || opts?.ssr || (!isVite && options.ssr);
			if (ssr && source === '@nubolab-ffwd/svelte-fluent') {
				if (!resolvedSvelteFluentSSR) {
					resolvedSvelteFluentSSR = this.resolve('@nubolab-ffwd/svelte-fluent/ssr', importer, {
						skipSelf: true
					}).then(
						(svelteFluentSSR) => {
							debug('resolved @nubolab-ffwd/svelte-fluent to @nubolab-ffwd/svelte-fluent/src/ssr');
							return svelteFluentSSR;
						},
						(err) => {
							debug(
								'failed to resolve @nubolab-ffwd/svelte-fluent to @nubolab-ffwd/svelte-fluent/src/ssr',
								err
							);
							return null; // returning null here leads to @nubolab-ffwd/svelte-fluent getting resolved regularly
						}
					);
				}
				return resolvedSvelteFluentSSR;
			}
		}
	};
}
