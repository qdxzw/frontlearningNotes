// 导入全部（通用）
import * as student from './student.js'

// 命名导入（对应导出方式：分别导出、统一导出）
// import { name as studentName, motto } from './student.js'

// 默认导入（对应导出方式：默认导出）
// import xxx from './student.js'

// 命名导入与默认导入可以混合使用
// import xxx,{name,motto} from './student.js'

// 动态导入（通用）
// document.getElementById("btn").onclick()=async()=>{
//   await import("./student.js")
// }

// import可以不接收任何数据
// import './student.js' //自动执行该模块

console.log(student)
