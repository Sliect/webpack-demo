const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src/app.js'),

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'ProvidePlugin'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _map: ['lodash', 'map'],
      Vue: ['vue/dist/vue.esm.js', 'default']
    })
  ],

  devServer: {
    open: true
  }
}