(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// 直接引入模块
const school = require('./school')
// // 引入的同时解构出要用的数据
// const { name, slogan, getTel, getCities } = require('./school')
// // 引入同时解构+重命名
// const { name: shlName, slogan, getTel: shlTel } = require('./school')
const student = require('./student')
console.log(school)
console.log(student)

},{"./school":2,"./student":3}],2:[function(require,module,exports){
const name = '尚硅谷'
const slogan = '让天下没有难学的技术！'

function getTel () {
  return '010-56253825'
}

function getCities () {
  return ['北京', '上海', '深圳', '成都', '武汉', '西安']
}

module.exports = {
  name,
  slogan,
  getTel,
  getCities
}

},{}],3:[function(require,module,exports){
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

},{}]},{},[1]);
