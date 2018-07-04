// 可以在终端显示spinner的插件
const ora = require('ora')
// 用于删除文件和文件夹的插件
const rm = require('rimraf')
const path = require('path')
// 用于在控制台输出带颜色的插件
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

// 动画效果插件
const spinner = ora('building for production...')
spinner.start()

// 清空dist文件夹下的static文件夹后开始webpack打包
rm(path.join('dist'), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})