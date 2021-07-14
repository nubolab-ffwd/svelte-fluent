const webpack = require('webpack')

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.browser': true
      })
    )
    return config
  }
}
