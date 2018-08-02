const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const vendors = ['vue', 'element-ui']

module.exports = {
  mode: "production",
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, '../static'),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
  },
  devtool: '#source-map',
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '[name]-manifest.json'),
      name: '[name]_[hash]',
    })
  ],
}