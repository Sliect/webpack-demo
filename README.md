# webpack从入门到放弃

## 使用版本
```
  // node v8.11.1
  "webpack-cli": "^3.0.8"
  "webpack": "^4.12.1"
```

## 入坑说明
```
  # 安装依赖
  npm i
  # 生成dll包, 提升webpack构建速度(只在第一次运行或第三方库升级才需要执行)
  npm run build:dll
  #  开始玩耍
  npm start
```



## 分离第三方库, 提高webpack构建速度