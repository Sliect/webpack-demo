const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack')

const resolve = function (dirname) {
  return path.join(__dirname, dirname)
}

const config = {
  entry: {
    app: resolve('src/app/index.js')
  },

  output: {
    path: resolve('build'),
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack demo'
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest: path.join(__dirname, 'vendor-manifest.json')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './static/*.dll.js'),
    })
  ],

  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "commons",
          chunks: "all"
        }
      }
    }
  }
}


module.exports = config