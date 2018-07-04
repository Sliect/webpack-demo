const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// vue-loader版本回退, 需兼容
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = function (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  mode: "production",

  entry: {
    main: './src/main.js'
  },

  output: {
    filename: 'static/js/[name].js',
    path: resolve('dist')
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        'postcss-loader'
      ]
    }, {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: 'vue-loader'
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          //打包生成图片的名字
          name: "static/img/[name].[ext]",
        }
      }
    }]
  },

  // 模块引入规则
  resolve: {
    // 后缀不用写的文件
    extensions: ['.js', '.vue', '.json'],
    // 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // @指代src文件目录
      '@': resolve('src'),
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: resolve('dist/index.html'),
      template: resolve('src/index.html'),
      // 放在body标签前
      minify: {
        // 删除index.html中的注释
        removeComments: true,
        // 删除index.html中的空格
        collapseWhitespace: true,
        // 删除各种html标签属性值的双引号
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:7].css"
    }),
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