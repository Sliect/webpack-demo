const path = require('path')
const chalk = require('chalk')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const resolve = function (dirname) {
  return path.join(__dirname, dirname)
}

const config = {
  entry: {
    app: resolve('../src/app/index.js')
  },

  output: {
    path: resolve('../dist'),
    filename: '[name].js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader"
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ["file-loader"]
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack demo'
    }),
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:7].css"
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