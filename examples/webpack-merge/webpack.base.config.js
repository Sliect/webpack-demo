const a = require('./webpack.a')
const b = require('./webpack.b')
const merge = require('webpack-merge')

console.log('merge输出: ' + JSON.stringify(merge(a, b)))

console.log('merge.smart输出: ' + JSON.stringify(merge.smart(a, b)))