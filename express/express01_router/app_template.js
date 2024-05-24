const express = require('express')
const router = express.Router()
// GET请求
router.get('/', function (req, res) {
  res.send('GET Express!')
})
//POST 请求
router.post('/', function (req, res) {
  res.send('Got a POST request')
})
// PUT请求
router.put('/', function (req, res) {
  res.send('Got a PUT request at /')
})
// DELETE请求
router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /')
})

module.exports = router
