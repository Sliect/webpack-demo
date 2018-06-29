# webpack-merge插件

## 使用方法
```
  进入当前目录
  node webpack.base.config.js
```
### webpack.a.js
```
module.exports = {
  a: [1],
  b: 2,
  c: 'aa',
  loaders: [{
    test: /\.js$/,
    loader: 'babel'
  }]
}
```

### webpack.b.js
```
module.exports = {
  a: [2, 3],
  b: 6,
  c: 'bb',
  loaders: [{
    test: /\.js$/,
    loader: 'coffee'
  }]
}
```

> //output
>
> merge输出: {"a":[1,2,3],"b":6,"c":"bb","loaders":[{"test":{},"loader":"babel"},{"test":{},"loader":"coffee"}]}
>
> merge.smart输出: {"a":[1,2,3],"b":6,"c":"bb","loaders":[{"test":{},"loader":"coffee"}]}

## 结论
> 合并数组对象, 覆盖基本类型。一般用于开发环境和生产环境的生成
>
> 如开发环境 module.exports = merge(baseConfig, devConfig)
>
> merge.smart会智能的合并loaders, 简单理解就是test的值理解为key, loader的值理解为value, 以后来居上的原则进行合并, 特殊情况如下
>
```
merge.smart({
  loaders: [{
    test: /\.js$/,
    loader: 'babel'
  }]
}, {
  loaders: [{
    test: /\.js$/,
    loaders: ['coffee']
  }]
});
// will become
{
  loaders: [{
    test: /\.js$/,
    // appended because Webpack evaluated these from right to left!
    loaders: ['babel', 'coffee']
  }]
}
```