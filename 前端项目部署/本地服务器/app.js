const express = require('express')
var history = require('connect-history-api-fallback')
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()
app.use(history())
const port = 9528

// 配置静态资源
app.use(express.static(__dirname + '/public'))
app.use(
  '/prod-api',
  createProxyMiddleware({
    target: 'https://heimahr.itheima.net/api',
    changeOrigin: true,
    pathRewrite: { '^/prod-api': '' }
  })
)
app.listen(port, () => {
  console.log(`本地服务器启动http://localhost:${port}`)
})
