// 对语言的修改。元编程
// proxy的方法：get（属性的读取）
console.log("==== 2、proxy的其他方法 ====")
// apply 用于拦截函数调用/
let twice = {
    apply (target, ctx, args) {
        console.log(arguments)
        console.log(Reflect.apply(...arguments))
        return Reflect.apply(...arguments) * 2
    }
}
function sum (left, right) {
    return left * right
}
var proxy = new Proxy(sum, twice)
let proxy1 = proxy(1,2)
console.log(proxy1)


console.log("==== 1、proxy的基本使用 ====")

var obj = {
    a : 100,
    b : 200,
}
let proxyObj = new Proxy(obj, {
    set: function(target, property, value) {
        console.log("target:"+target + " property: " + property + " value: "+value)
        console.log("proxy set")
    },
    get: function(target, property) {
        if (property in target) {
            console.log("target: "+target + " property: "+property)
            return "proxy get"  // 拦截即有的操作返回自己的逻辑。
        }
    },
})
console.log(obj.a)
console.log(proxyObj.a)
proxyObj.a = 300
console.log(proxyObj)


var obj1 = {
    a : 100,
    b : 200,
    Proxy: new Proxy(this, {
        set: function() {
            console.log("obj1 proxy set invoke")
        }
    })
}
let obj2 = obj1.Proxy
obj2.a = 500
console.log(obj1)
