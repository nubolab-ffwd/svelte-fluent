import presetEnv from 'postcss-preset-env';

export default {
	plugins: [
		presetEnv({
			features: {
				'custom-properties': false // breaks input ring color overrides
			}
		})
	]
};
