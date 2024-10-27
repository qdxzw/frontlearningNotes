// 直接引入模块
const school = require('./school')
// // 引入的同时解构出要用的数据
// const { name, slogan, getTel, getCities } = require('./school')
// // 引入同时解构+重命名
// const { name: shlName, slogan, getTel: shlTel } = require('./school')
const student = require('./student')
console.log(school)
console.log(student)
