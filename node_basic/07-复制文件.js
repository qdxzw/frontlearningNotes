/**
 * 需求：
 *  复制【素材】文件夹下的慢热的气球 - 在你的身边 (慢放版).ogg
 */
const fs = require('fs')
// 方式一 readFile
let data = fs.readFileSync('./素材/慢热的气球 - 在你的身边 (慢放版).ogg')
fs.writeFileSync('./素材/慢热的气球 - 在你的身边 (慢放版)_复制版.ogg', data)
// 方式二 流式操作
// 创建读取流对象
const rs = fs.createReadStream('./素材/慢热的气球 - 在你的身边 (慢放版).ogg')
// 创建写入流对象
const ws = fs.createWriteStream(
  './素材/慢热的气球 - 在你的身边 (慢放版)_复制版.ogg'
)
// 绑定data事件 chunk 大块 大块儿
rs.on('data', chunk => {
  // chunk每次读取的数据（64kb）
  ws.write(chunk)
})
rs.on('end', () => {
  console.log('读取复制完成')
})
