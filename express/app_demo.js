var http = require('http')
// 通过http模块 创建web应用
var app = http.createServer(function (request, response) {
  response.writeHead(200, { ContentType: 'text/plain' })
  response.end('Hello world!')
})
// 通过监听端口启动
app.listen(3000, 'localhost')
console.log('http://localhost:3000')
