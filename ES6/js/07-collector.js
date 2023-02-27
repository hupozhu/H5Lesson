// set 和 weakset 、map 和 weakmap

console.log("==== 4、weakmap ====")
let weakmap = new WeakMap()
weakmap.set({}, 100)   // set 只能接受对象作为key
console.log(weakmap)

console.log("==== 3、map ====")
// map的key可以是任意类型. 与set使用类似。都支持for...of, forEach, entries
let map01 = new Map()
map01.set("a", 100)
console.log(map01)
console.log(map01.get("a"))

console.log("==== 2、weakSet ====")
// 不能初始化赋值，只能通过add赋值，只能是对象的集合。用得不多。
// 没有size，没有clear方法, 不能遍历。
let weakset = new WeakSet()
weakset.add({'a': 1})
console.log(weakset.size)
console.log(weakset)


console.log("==== 1、set ====")
let demoSet = new Set(["a", "b", "c", "d", "e"])

console.log("==== 1.3、转换 ====")
// set不能使用map方法，需要转成数组
let array = [...demoSet]
array.map((value)=> {
    console.log(value)
    return value
})




console.log("==== 1.2、遍历 ====")
let setType2 = new Set(["a", "b", "c", "d", "e"])
for(let itemKey of setType2.keys()) {
    console.log(itemKey)
}
for(let item of setType2) {
    console.log(item)
}





console.log("==== 1.1、基础 ====")
let setType = new Set()
setType.add(1)
setType.add(1)
setType.add(2)
setType.add(3)
console.log(setType)

let setType1 = new Set([1,2,3,4,4,3])
setType1.delete(3)

console.log(setType1)

console.log(setType1.size)

setType1.clear()
console.log(setType1)