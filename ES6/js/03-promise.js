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


console.log("==== 6、promise finally 封装 ====")
Promise.prototype.finally = function(callback) {
    let P = this.constructor
    return this.then(
        value => P.resolve(callback()).then(()=> value),
        reason => P.resolve(callback()).then(()=> {throw reason})
    )
}
readFile("./test.txt").then((onfulfilled, onrejected)=> {
    console.log("demo6 : " + onfulfilled)
    return fs.readFile("./test01.txt")
}).catch((reason)=> {
    console.log("demo6 : "+reason)
}).finally(()=> {
    console.log("demo6 : finally invoke")
})





console.log("==== 5、promise done 封装 ====")
Promise.prototype.done = function(resolve, reject) {
    this.then(resolve, reject).catch(reason => {
        setTimeout(()=> {
            console.error("demo05 : 信息错误："+ reason)
        }, 0)
    })
}
readFile("./test.txt").then((onfulfilled, onrejected)=> {
    console.log("demo5 : " + onfulfilled)
    return fs.readFile("./test01.txt")
}).done()






console.log("==== 4、promise all方法 ====")
let p1 = readFile("./test.txt")
let p2 = readFile("./test.txt")
let p3 = readFile("./test02.txt")
Promise.all(p1, p2, p3).then((data)=>{
    console.log("demo04 : ")
    console.log(data.toString())
}).catch((reason)=> {
    console.log("demo04 : " + reason)
})




console.log("==== 3、promise resolve方法 ====")
console.log("3.1、resolve相当于给对象套壳")
let pro = Promise.resolve("testing")
pro.then((data)=> {
    console.log("demo3 : " + data)
})

let thenable = {
    then: function(myresolve, myreject) {
        myresolve(42)
    }
}
let pro1 = Promise.resolve(thenable)
pro1.then((data)=> {
    console.log("demo3 : " + data)
})




console.log("==== 2、promise函数调用readFile ====")
console.log("2.1、promise对象单独无任何意义，必须要当作一个函数的返回值才有意义。")
console.log("2.2、catch会影响当前函数的执行，return给下面的数据为undefined。")

readFile("./test.txt").then((data)=> {
    console.log(data)
    console.log("111")
    return readFile("./test01.txt")
}).then((data)=> {
    console.log(data)
    console.log("222")
    return readFile("./test02.txt")
}).catch((err)=> {
    console.log(err)
}).then((data)=> {
    console.log(data)
    console.log("333")
})


// console.log("==== 1、直接使用readFile ====")
// fs.readFile("./test.txt", (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })
