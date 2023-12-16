// 引入相应模块
const fs = require('fs')
const path = require('path')
// __dirname保存着当前文件所在目录的绝对路径，可以使用__dirname与文件名拼接成绝对路径，不规范
console.log(__dirname + '/test.html') //E:\code\WebCode\vue\node_basic/test.html 不规范
// 拼接规范的绝对路径 (第一个参数绝对路径，后面的参数都为相对路径)
console.log(path.resolve(__dirname, './test.html')) //E:\code\WebCode\vue\node_basic\test.html
console.log(path.resolve(__dirname, 'test.html')) //E:\code\WebCode\vue\node_basic\test.html
console.log(path.resolve(__dirname, '/test.html')) //E:\test.html
let str = 'E:\\code\\WebCode\\vue\\node_basic\\test.html'
// 获取操作系统的路径分隔符
console.log(path.sep) //windows: \  linux: /
// 获取文件的绝对路径
console.log(__filename) //E:\code\WebCode\vue\node_basic\14-path模块.js
// 获取文件目录的绝对路径
console.log(__dirname) //E:\code\WebCode\vue\node_basic
// 获取路径的基础名称
console.log(path.basename(str)) //test.html
// 获取路径的目录名
console.log(path.dirname(str)) //E:\code\WebCode\vue\node_basic
// 获取路径的扩展名
console.log(path.extname(str)) //.html
