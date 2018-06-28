const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const CompressionWebpackPlugin = require('compression-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(["build"]),
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