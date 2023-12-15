// 1.引入fs模块
const fs = require('fs')
// 异步追加
// fs.appendFile('./座右铭.txt', ',择其善者而从之，择其不善者而改之', err => {
//   if (err) {
//     console.log('写入失败')
//     return
//   }
//   console.log('追加写入成功')
// })

// 同步追加
// fs.appendFileSync('./座右铭.txt', '\r\n温故而知新，可以为师矣')

// writeFile 实现追加写入（使用配置项）
fs.writeFile('./座右铭.txt', 'love love love', { flag: 'a' }, err => {
  // 如果写入失败，值为错误对象 写入成功：null
  if (err) {
    console.log('写入失败')
    return
  }
  console.log('写入成功')
})
