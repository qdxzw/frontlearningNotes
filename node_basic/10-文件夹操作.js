const fs = require('fs')
// // 同步创建
// fs.mkdirSync('./test')
// // 同步创建——递归创建 recursive递归
// fs.mkdirSync('./a/b/c', { recursive: true })
// // 异步创建
// fs.mkdir('./test', err => {
//   if (err) {
//     console.log('创建失败')
//     return
//   }
//   console.log('创建成功')
// })
// // 同步创建——递归创建 recursive递归
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//   if (err) {
//     console.log('创建失败')
//     return
//   }
//   console.log('创建成功')
// })

// // 获取文件夹（同步）
// console.log(fs.readdirSync('./'))
// // 获取文件夹（异步）
// fs.readdir('./', (err, data) => {
//   if (err) {
//     console.log('获取文件夹失败')
//     return
//   }
//   console.log(data)
// })

// // 删除文件夹（同步）
fs.rmSync('./test', { recursive: true })
// fs.rmSync('./a', { recursive: true })
//递归删除文件夹（异步）
// fs.rm('./a', { recursive: true }, err => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('删除成功')
// })
