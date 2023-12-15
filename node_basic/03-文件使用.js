/**
 *需求：
 * 新建一个文件，座右铭.txt,写入内容，三人行，则必有我师焉
 */

//  1.导入fs模块
const fs = require('fs')
// 2.写入文件 四个参数 (file,data[,options],callback)
// file 文件名
// data 代写入的数据
// options 选项设置（可选）
// callback 写入回调
// 返回值：undefined
fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', err => {
  // 如果写入失败，值为错误对象 写入成功：null
  if (err) {
    console.log('写入失败')
    return
  }
  console.log('写入成功')
})

// console.log(1)

// // 异步写入
fs.writeFile('./座右铭.txt', '三人行，则必有我师焉', err => {
  // 如果写入失败，值为错误对象 写入成功：null
  if (err) {
    console.log('写入失败')
    return
  }
  console.log('写入成功')
})
// 同步写入
fs.writeFileSync('./test.txt', 'test')
