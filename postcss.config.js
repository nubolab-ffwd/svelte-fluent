import autoprefixer from 'autoprefixer';
import presetEnv from 'postcss-preset-env';

export default {
	plugins: [
		autoprefixer,
		presetEnv({
			features: {
				'nesting-rules': true,
				'custom-selectors': true,
				'logical-properties-and-values': { dir: 'ltr' }
			}
		})
	]
};
