<!-- <script>
import { ref } from 'vue'

const count = ref(0)

console.log(count)
console.log(count.value)

count.value++
console.log(count.value)

export default {
    setup() {
        const count = ref(0)

        // 暴露方法作为事件监听
        function increment() {
            count.value++
        }

        return {
            count,
            increment
        }
    }
}
</script> -->

<!-- 与上面setup内部等价 -->
<!-- 单文件组件 SFC 可以大幅度简化代码 -->
<script setup>
// ref是指reference
// 为什么要用ref，而不是普通变量呢？
// 使用ref，改变ref，vue会自动检测到这个变化，然后更新DOM
// 在标准的js中，检测普通变量的访问和修改是不行的，需要通过getter和setter来拦截对象属性的get和set操作
// .value属性给予了vue一个机会来检测ref何时被访问或修改
// 可以研究更多的深入响应式原理学习
import { nextTick, reactive, ref } from 'vue'
const count = ref(0)

// 暴露方法作为事件监听
async function increment() {
    count.value++
    // 修改了响应式状态 DOM会自动更新
    // 注意DOM更新不是同步的，vue会在next tick更新周期中缓冲所有状态的修改，确保不管进行了多少次状态修改，每个组件只会被更新一次
    await nextTick()
}

// ref会有深层响应行
// 也可以通过shallow of来放弃深层响应性
// 对于浅层ref，只有.value访问会被追踪
const obj = ref({
    nested: {
        count: 2
    },
    arr: ["foo", "bar"]
})

function mutateDeeply() {
    obj.value.nested.count--;
    obj.value.arr.push('baz')
}

// reactive()使对象本身具有响应性
// 响应对象是javascript代理，行为和普通对象一样，区别是vue能拦截对响应式对象所有属性的访问和修改，以便进行依赖追踪和触发更新
const state = reactive({ count: 0 })

// 注意proxy和原始对象不等
const raw = {}
const proxy = reactive(raw)
console.log(raw === proxy)

// reactive()的缺点
// 1. 有限的类型，如对象、数组、Map、Set这样的，string number boolean不行
// 2. 不能替换整个对象，这样会导致之前的响应性连接丢失
//    let state = reactive({ count: 0 })
//    state = reactive({ count: 1 })
// 3. 对解构操作不友好，将属性传递给函数时，会丢失响应性连接
//    const state = reactive({ count: 0 })
//    let { count } = state
//    count++
//    此时已经无法追踪state.count的变化了
// 总结：建议还是使用ref()

// 额外的reference解包细节
// 作为reactive对象的属性
// 一个ref会在作为响应式对象的属性被访问或修改时自动解包，行为会像一个普通的属性
const countt = ref(0)
const statee = reactive({ countt })

console.log(statee.countt)

statee.countt++
console.log(countt.value)

// 如果将一个新ref赋值给一个关联了已有ref的属性，那么它会替换掉旧的ref
const otherCount = ref(2)
statee.countt = otherCount
console.log(statee.countt)
console.log(countt.value)

// 数组与集合的注意事项
// 与reactive对象不同，当ref作为响应式数组或者原生集合类型（如Map）中的元素被访问时，它不会被解包
const books = reactive([ref('Vue 3 Guide')])
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
console.log(map.get('count').value)

// 在模板中解包的注意事项
// 模板渲染上下文中，只有顶级的ref属性才会被解包
const counttt = ref(0)
const object = { id: ref(1) }
const idd = object.id
</script>

<template>
    <button @click="increment">increment</button>
    <button @click="mutateDeeply">mutateDeeply</button>

    <button @click="state.count++">state-{{ state.count }}</button>
    <!-- 模板使用时 不需要 .value -->
    <div>{{ count }}</div>
    <div>{{ obj }}</div>

    <!-- 模板解包，顶级ref属性才会被解包 -->
    <div>{{ counttt + 1 }}</div>
    <!-- 计算表达式 -->
    <div>{{ object.id + 1 }}</div>
    <!-- 将id解构为顶级属性 -->
    <div>{{ idd + 1 }}</div>
    <!-- 文本插值的特性就是将下面的代码转换为 object.id.value  -->
    {{ object.id }}

</template>

<style></style>