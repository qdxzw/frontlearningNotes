const fs = require('fs')
// __dirname保存着当前文件所在目录的绝对路径，可以使用__dirname与文件名拼接成绝对路径
console.log(__dirname)
console.log(__dirname + '/test.html') //E:\code\WebCode\vue\node_basic/test.html 不规范
fs.writeFileSync(__dirname + '/test.html', 'love')
