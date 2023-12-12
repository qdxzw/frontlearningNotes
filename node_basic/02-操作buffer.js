// // buffer与字符串的转换
// let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
// console.log(buf_4.toString()) //iloveyou  utf-8

//[]
// let buf = Buffer.from('hello')
// console.log(buf[0].toString(2)) //01101000 toString是进制转换
// console.log(buf) //<Buffer 68 65 6c 6c 6f>
// buf[0] = 95
// console.log(buf) //<Buffer 5f 65 6c 6c 6f>
// console.log(buf.toString()) //_ello

// // 溢出
// let buf_1 = Buffer.from('hello')
// buf_1[0] = 361 //超过了255，舍弃高位的数字 0001 0110 1001 =>0110 1001
// console.log(buf_1) //<Buffer 69 65 6c 6c 6f>
// // 中文
// let buf_2 = Buffer.from('你好')
// console.log(buf_2) //<Buffer e4 bd a0 e5 a5 bd> 一个utf-8占三个字节
