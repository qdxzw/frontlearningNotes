const fs = require('fs')
// 使用stat来查看资源的详细信息
fs.stat('./素材/慢热的气球 - 在你的身边 (慢放版).ogg', (err, data) => {
  if (err) {
    console.log('查看失败')
    return
  }
  console.log(data)
})
