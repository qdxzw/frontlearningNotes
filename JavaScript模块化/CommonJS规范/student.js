const name = '张三'
const motto = '相信明天会更好！'

function getTel () {
  return '13877889900'
}

function getHobby () {
  return ['抽烟', '喝酒', '烫头']
}
// console.log(arguments.callee.toString()) 包裹在一个内置函数中执行
module.exports = { name, motto, getTel, getHobby }
