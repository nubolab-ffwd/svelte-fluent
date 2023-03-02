import type { ResolvedId } from 'rollup';
import type { Plugin as VitePlugin } from 'vite';

type PluginOptions = { ssr?: boolean };

const defaultOptions = { ssr: false };

function debug(...args: unknown[]) {
	if (process.env.DEBUG) {
		console.debug(...args);
	}
}

export default function svelteFluentPlugin(options: PluginOptions = defaultOptions): VitePlugin {
	options = { ...defaultOptions, ...options };
	let resolveResult: Promise<ResolvedId | null>;
	let isVite = false;

	return {
		name: 'svelte-fluent',
		enforce: 'pre',

		config() {
			isVite = true;
		},

		buildStart() {
			if (isVite && options.ssr) {
				this.warn(
					'Setting the `ssr` option is not necessary when using vite. The setting will be ignored.'
				);
			}
		},

		async resolveId(source, importer, opts, _ssr?: boolean) {
			const ssr = _ssr === true || opts?.ssr || (!isVite && options.ssr);
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
		}
	};
}
