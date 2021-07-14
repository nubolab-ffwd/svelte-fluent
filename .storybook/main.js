const path = require('path')
const webpack = require('webpack')

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  async webpackFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@nubolab-ffwd/svelte-fluent': path.resolve(__dirname, '../src')
        }
      }
    }
  }
}
