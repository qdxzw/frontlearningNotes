// 1.导入fs模块
const fs = require('fs')
// 2.读取文件夹
const fsDir = fs.readdirSync('./')
fsDir.forEach(item => {
  // 根据-把字符串转为数组
  let data = item.split('-')
  //  数组结构
  let [num, name] = data
  // 判断是否>10，进行字符串拼接
  if (Number(num) < 10) {
    num = '0' + num
  }
  // 创建新的文件名
  let newFileName = num + name
  // 重命名
  fs.renameSync(`./${item}`, `./${newFileName}`)
})
