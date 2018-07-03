const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

console.log('---------------------------------')
console.log('当前环境: ' + process.env.NODE_ENV)
if (process.env.FAVORITE_FRUIT) {
  console.log('最喜欢的水果: ' + process.env.FAVORITE_FRUIT)
}
console.log('---------------------------------')

module.exports = {
  entry: {
    'app': path.resolve(__dirname, 'src/app.js')
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      title: 'cross-env'
    })
  ],

  devServer: {
    open: true
  }
}