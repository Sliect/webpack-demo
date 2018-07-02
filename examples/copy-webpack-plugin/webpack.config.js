const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

const resolve = function (dir) {
  path.resolve(__dirname, dir)
}

module.exports = {
  mode: 'production',
  entry: './src/a.js',
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new CopyWebpackPlugin([{
      from: './src/',
      to: resolve('./dist/[0]-[name].[ext]'),
      // ignore: ['*.text', 'a.js']
      // flatten: false,
    }])
  ]
}