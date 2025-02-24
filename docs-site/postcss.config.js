import presetEnv from 'postcss-preset-env';
import postcssGlobalData from '@csstools/postcss-global-data';

export default {
	plugins: [
		postcssGlobalData({
			files: ['./src/lib/styles/global.postcss']
		}),
		presetEnv({
			features: {
				'nesting-rules': true,
				'custom-selectors': true,
				'logical-properties-and-values': { dir: 'ltr' }
			}
		})
	]
};
