# DefinePlugin

## 使用姿势

```
  只有未定义的变量才会去匹配DefinePlugin定义的变量,也就是说可以
  把DefinePlugin定义的变量理解为原型链上的属性

  推荐在使用DefinePlugin定义的全局变量前注释, 方便查找来源
```

## 使用说明
```
  进入当前目录执行命令 webpack-dev-server 观察浏览器控制台输出

  new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(true),
    VERSION: JSON.stringify('5fa3b9'),
    BROWSER_SUPPORTS_HTML5: true,
    TWO: '1+1',
    AGE_OBJECT: JSON.stringify({
      age: 18
    }),
    THREE: JSON.stringify('1+2')
  })
```