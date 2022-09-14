/**
 * @typedef {object} PluginOptions
 * @property {boolean?} ssr
 */

const defaultOptions = { ssr: false };

/**
 * @param {...any} args
 */
function debug(...args) {
	if (process.env.DEBUG) {
		console.debug(...args);
	}
}

/**
 *
 * @param {PluginOptions} options
 * @returns {import('vite').Plugin}
 */
export default function svelteFluentPlugin(options = defaultOptions) {
	options = { ...defaultOptions, ...options };
	/** @type {Promise<import('rollup').ResolvedId | null>} */
	let resolveResult;
	let isVite = false;

	return {
		name: 'svelte-fluent',
		enforce: 'pre',

		config() {
			isVite = true;
		},

		/**
		 * @this {import('rollup').PluginContext}
		 */
		buildStart() {
			if (isVite && options.ssr) {
				this.warn(
					'Setting the `ssr` option is not necessary when using vite. The setting will be ignored.'
				);
			}
		},

		/**
		 *
		 * @this {import('rollup').PluginContext}
		 * @param {string} source
		 * @param {string?} importer
		 * @param {PluginOptions?} opts
		 * @param {boolean?} _ssr
		 * @returns {Promise<import('rollup').ResolveIdResult>}
		 */
		async resolveId(source, importer, opts, _ssr) {
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
