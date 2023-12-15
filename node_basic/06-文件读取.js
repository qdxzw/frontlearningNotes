// 1.引入fs模块
const fs = require('fs')

// // 2.异步读取
// fs.readFile('./观书有感.txt', (err, data) => {
//   if (err) {
//     console.log('读取失败~~')
//     return
//   }
//   console.log(data.toString())
// })

// // 2.同步读取
// let str = fs.readFileSync('./观书有感.txt')
// console.log(str.toString())

// 3.创建读取流对象
const rs = fs.createReadStream('./素材/慢热的气球 - 在你的身边 (慢放版).ogg')
// 3.1绑定data事件 chunk块儿 大块儿
rs.on('data', chunk => {
  console.log(chunk.length) //65536字节=> 64kB
})
// 3.2end 可选事件
rs.on('end', () => {
  console.log('读取完成')
})
