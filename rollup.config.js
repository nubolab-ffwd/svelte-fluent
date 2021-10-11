import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		output: [
			{ file: pkg.module, format: 'es' },
			{ file: pkg.main, format: 'umd', name: 'SvelteFluent' }
		],
		plugins: [svelte(), resolve()]
	},
	{
		input: 'src/rollup-plugin.js',
		output: [
			{ file: 'dist/rollup-plugin.mjs', format: 'es' },
			{ file: 'dist/rollup-plugin.js', format: 'cjs', exports: 'auto' }
		],
		plugins: [resolve()]
	}
];

// export default [
//   {
//     input: ['src/index.js', 'src/rollup-plugin.js', 'src/ssr.js'],
//     output: [
//       {
//         dir: 'dist/esm',
//         format: 'esm',
//         entryFileNames: '[name].mjs',
//         chunkFileNames: 'chunks/[name].mjs'
//       },
//       {
//         dir: 'dist/cjs',
//         format: 'cjs',
//         entryFileNames: '[name].js',
//         exports: 'auto',
//         chunkFileNames: 'chunks/[name].js'
//       }
//     ],
//     external: ['jsdom'],
//     plugins: [svelte(), resolve()]
//   },
//   {
//     input: 'src/index.js',
//     output: {
//       file: 'dist/umd/index.js',
//       format: 'umd',
//       name: 'SvelteFluent'
//     },
//     external: ['jsdom'],
//     plugins: [svelte(), resolve()]
//   }
// ]
