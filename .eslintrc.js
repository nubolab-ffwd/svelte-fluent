module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    requireConfigFile: false
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }],
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off'
      }
    },
    {
      files: ['tests/**/*.js'],
      env: {
        jest: true
      }
    }
  ]
}
