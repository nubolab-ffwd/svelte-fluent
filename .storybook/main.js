const webpack = require('webpack');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions'
  ],
  webpackFinal: (config) => {
    config.plugins.push(new webpack.DefinePlugin({
      'process.browser': true,
    }))
    return config
  },
};
