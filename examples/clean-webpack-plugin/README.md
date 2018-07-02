# clean-webpack-plugin 插件

## 使用方法
```
  const CleanWebpackPlugin = require('clean-webpack-plugin')
  // 数组形式可以设置多个清除路径
  let pathToClean = ['dist']
  let cleanOptions = {
    // 通过设置root根路径可以更灵活
    root: __dirname,
    // 设置不删除的文件
    exclude: ['shared.js', 'file'],
    // 将log写到 console
    verbose: true
  }

  // webpack config
  {
    ...,
    plugins: [
      new CleanWebpackPlugin(pathToClean, cleanOptions)
    ]
  }
```