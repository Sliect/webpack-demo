const path = require('path')
const chalk = require('chalk')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

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
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
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