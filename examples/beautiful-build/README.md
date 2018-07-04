# 使用chalk勾画控制台 照搬vue-cli下的build文件

> chalk比较简单, 就整了一个比较全的production版的webpack配置,
>
> 还用到了webpack4 分离css文件, splitChunks, babel配置, postcss配置, loader配置

## 使用姿势
```
  进入当前目录安装依赖
  npm i
  打包观察生成文件
  npm run build
  (可以自己写一个webpack.dev.config.js运行)
```

## 一点小心得
```
  new MiniCssExtractPlugin({
    filename: "static/css/[name].[contenthash:7].css"
  })
  rules: [{
    test: /\.(png|svg|jpg|jpeg|gif)$/,
    use: {
      loader: 'file-loader',
      options: {
        //打包生成图片的名字
        name: "static/img/[name].[ext]",
      }
    }
  }]
  无论是MiniCssExtractPlugin插件分离的css文件还是file-loader配置输出的文件,
  都是相对output.path输出
```

>  注意
>
> import Vue from 'vue'
>
> 这里默认引入得是 dist/vue.runtime.esm.js
>
> 在配置里改为默认引入 vue/dist/vue.esm.js
>
> [查看版本解释](https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A)
