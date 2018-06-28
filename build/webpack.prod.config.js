const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const CompressionWebpackPlugin = require('compression-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  context: path.resolve(__dirname, '../'),
  mode: "production",

  plugins: [
    new BundleAnalyzerPlugin(),
    // 开启gzip压缩
    // new CompressionWebpackPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: new RegExp(
    //     '\\.(' + ['js', 'css'].join('|') + ')$'
    //   ),
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ]
})

module.exports = (env, argv) => {
  return webpackConfig
}