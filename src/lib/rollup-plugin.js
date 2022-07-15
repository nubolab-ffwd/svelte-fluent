const defaultOptions = { ssr: false };

function debug(...args) {
	if (process.env.DEBUG) {
		console.debug(...args);
	}
}

export default function svelteFluentPlugin(options = defaultOptions) {
	options = { ...defaultOptions, ...options };
	let resolvedSvelteFluentSSR;
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

		async resolveId(importee, importer, opts, _ssr) {
			const ssr = _ssr === true || opts.ssr || (!isVite && options.ssr);
			if (ssr && importee === '@nubolab-ffwd/svelte-fluent') {
				if (!resolvedSvelteFluentSSR) {
					resolvedSvelteFluentSSR = this.resolve(
						'@nubolab-ffwd/svelte-fluent/src/ssr.js',
						importer,
						{
							skipSelf: true
						}
					).then(
						(svelteFluentSSR) => {
							debug(
								'resolved @nubolab-ffwd/svelte-fluent to @nubolab-ffwd/svelte-fluent/src/ssr.js'
							);
							return svelteFluentSSR;
						},
						(err) => {
							debug(
								'failed to resolve @nubolab-ffwd/svelte-fluent to @nubolab-ffwd/svelte-fluent/src/ssr.js',
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
