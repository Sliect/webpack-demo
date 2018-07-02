# require.ensure 用法

## 使用场景：满足条件才加载相应的文件

## 使用语法
> require.ensure(dependencies: String[], callback: function(require), chunkName: String)

```
  callback 所有的依赖都加载完成后，webpack会执行这个回调函数

  chunkName 提供给这个特定的 require.ensure() 的 chunk 的名称

  进入当前目录执行命令 webpack-dev-server, 可以将b.js 从入口文件中打包出去

  dependencies 作为回调函数依赖的其他异步加载的模块, 本身并不执行,执行命令 webpack-dev-server --config webpack.entry2.config.js 可见a.js并不输出

  dependencies 想要执行得异步引入a.js,先在webpack.entry2.config.js中取消注释 再执行命令 webpack-dev-server --config webpack.entry2.config.js 可见 a.js 输出

  在chrome浏览器中Network 下的js 部分可查看具体打包效果
```

## 注意内部依赖Promise, ES6语法在旧浏览器中需polyfill