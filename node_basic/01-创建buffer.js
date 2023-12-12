// 1.alloc(分配)
let buf = Buffer.alloc(10)
// console.log(buf) //<Buffer 00 00 00 00 00 00 00 00 00 00>

// 2.allocUnsafe(不安全的，可能会包含旧的内存数据，优点比alloc快)
let buf_2 = Buffer.allocUnsafe(10000)
// console.log(buf_2)

// 3.from(将一个字符串或者数组转为Buffer)
let buf_3 = Buffer.from('hello')
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
// console.log(buf_3) //<Buffer 68 65 6c 6c 6f>
console.log(buf_4) //<Buffer 69 6c 6f 76 65 79 6f 75>
