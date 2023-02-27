// async
// ES7 提出函数，结局promise连续then的火车黑洞。
// 任何一个函数都可以加 async 关键字，标识这个函数异步执行「函数体内同步执行，await接收异步函数，将异步语句变成同步执行」。
// await 表达式最好放到try-cache代码块中。

var fs = require("fs")

function readFile(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url,(err, data) => {
            if(err) {
                reject(err)
                return
            } 
            resolve(data.toString())
        })
    })
}

console.log("==== 3、其他 语法 ====")
console.log("3.1、for await...of 遍历异步的iterator")

console.log("==== 2、async 语法 ====")

console.log("2.2、可通过try-cache捕获 promise的错误")
async function testError() {
    throw new Error("出错了")
    return "safe done"
}
async function cacheError() {
    try {
        await testError()
    } catch (error) {
        console.log("demo2.2 : " + error)
    }
}
cacheError()



console.log("2.1、加 async 返回 promise对象壳子。如果没有await可以使用then获取值")
async function sayHello() {
    return "Hello world!"
}
console.log(sayHello().then((data)=> {
    console.log("demo2.1 : " + data)
}))



console.log("==== 1、async 基本使用 ====")
async function files() {
    const data1 = await readFile("./test.txt")      // 需要用到 await 否则返回一个promise对象。
    const data2 = await readFile("./test02.txt")
    console.log(data1)
    console.log(data2)
}
files()
console.log("demo01 :")