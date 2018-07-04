# ProvidePlugin

## 不需要再声明引入模块, 与DefinePlugin的共同点是都不需要声明变量, 区别是一个引入变量, 一个引入模块

## 使用姿势
```
  进入当前目录 执行命令 npm i & webpack-devserver

  观察浏览器控制台输出
```

## 更有意思的地方
```
  jquery 使用异步模块规范(AMD)引入模块
  lodash 使用CommonJS规范
  vue 使用ES6模块规范

  基于CommonJS规范的模块, 当require('package')时会根据package.json中的main字段去引入
  ES2015之后的ES模块也作为官方标准, 为了不与CommonJS的main字段冲突, 使用了module字段, 参见vue的package.json

  new webpack.ProvidePlugin({
    $: 'jquery',
    _map: ['lodash', 'map'],
    Vue: ['vue/dist/vue.esm.js', 'default']
  })
  这里的jquery 相当于 "main": "dist/jquery.js"
  这里的lodash 相当于 "main": "lodash.js"
  vue因为是ES模块, 所以 "module": "dist/vue.runtime.esm.js", vue有多种文件对应不同的使用场景, 根据需要引入
  需要注意的是ES模块需要加上一个default 才能引入, 否则引入的是一个Module对象
```