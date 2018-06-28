const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.config.js')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  mode: "development",

  devServer: {
    hot: true
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest: path.join(__dirname, 'vendor-manifest.json')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, '../static/*.dll.js'),
    })
  ]
})

module.exports = (env, argv) => {
  return webpackConfig
}