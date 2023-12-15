const fs = require('fs')
// 文件的重命名
fs.rename('./座右铭.txt', './右铭.txt', err => {
  if (err) {
    console.log('修改失败')
    return
  }
  console.log('修改成功')
})
// 文件的移动
fs.rename('./右铭.txt', './素材/右铭.txt', err => {
  if (err) {
    console.log('移动失败')
    return
  }
  console.log('移动成功')
})
