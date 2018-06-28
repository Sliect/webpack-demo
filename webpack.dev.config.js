const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config.js')

const webpackConfig = merge(baseWebpackConfig, {
  mode: "development",

  devServer: {
    hot: true
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = (env, argv) => {
  return webpackConfig
}