const fs = require('fs')
// 使用unlink或unlinkSync来删除文件
fs.unlink('./test.txt', err => {
  if (err) {
    console.log('删除失败')
    return
  }
  console.log('删除成功')
})
// 使用rm方法 node14.4支持 也有相应的同步删除rmSync
fs.rm('./test.txt', err => {
  if (err) {
    console.log('删除失败')
    return
  }
  console.log('删除成功')
})
