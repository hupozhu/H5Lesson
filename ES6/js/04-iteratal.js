// Generator 函数
// 状态机
// 解决异步流程; 具有iterator作用
// 遇到yeild暂停执行，yield后表达式作为对象的value，下次调用next继续执行，直到return为止，并将return表达式作为对象的value。如果没有return返回对象value为undefined
// 与iterator的关系，Generetor就是遍历器生成函数，可以把Generator赋值给对象的Symbol.iterator属性，从而使该对象具有iterator接口。

console.log("==== 3、yield* 在一个generator中调用另一个generator ====")
var ite1 = function* () {
    yield "1"
    yield "2"
}
var ite2 = function* () {
    yield "x"
    yield* ite1()
    yield "y"
}
console.log("demo3: ")
for(let i of ite2()) {
    console.log(i)
}

console.log("==== 2、对象扩展 iterator ====")
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield "1";
    yield "2";
    return "3";
}
console.log("demo2: ")
for(let item of myIterable) {
    console.log(item)
}
console.log([...myIterable])

console.log("==== 1、generator 函数使用 ====")
function* testGenerator() {
    yield "1";
    yield "2";
    return "3";
}
let fun = testGenerator()

for(let item of fun) {
    console.log(item)   // return 后for循环不会执行。
}

console.log(fun.next()) // 循环也会消耗迭代的状态
console.log(fun.next())
console.log(fun.next())
console.log(fun.next())

console.log(9999)

console.log("==== 0、简单的iterator ====")
console.log("demo0: ")
var arr = [1,2,3,4,5]
// 2、for .. of 循环. 
for(let item of arr) {
    console.log(item)
}

// 1、iterator 使用
var ite = arr[Symbol.iterator]()
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())
console.log(ite.next())