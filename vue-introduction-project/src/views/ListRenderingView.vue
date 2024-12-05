<script setup>
import { computed, reactive, ref } from 'vue';

const items = ref([{ id: 1, message: 'Foo' }, { id: 2, message: 'Bar' }])

const myObject = reactive({
    title: "How to do lists in  Vue",
    author: 'Vinylon',
    date: Date.now()
})

const itemss = ref([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
])

// 数组变化侦测
// 像 filter(), concat() 和 slice() 这些就不会更改原数组，而是返回一个新数组 ======== 可以参考es6
// 并且这些不会丢失现有的DOM并重新渲染整个列表
function removeItem(id) {
    itemss.value = itemss.value.filter(item => item.id !== id);
}

// 希望显示数组经过过滤或排序后的内容，而不实际变更或重置原始数据
const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8])
const evenNumbers = computed(() => {
    return numbers.value.filter(n => n % 2 === 0)
})

const sets = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])
// 创建原数组副本
const setsReverse = [...sets.value].reverse()
</script>

<template>
    <li v-for="(item, index) in items">
        {{ index }} -- {{ item.message }}
    </li>
    <br>
    <!-- v-for遍历一个对象的所有属性 -->
    <!-- 顺序会基于该对象调用Object.values()的返回值来决定 -->
    <ul>
        <li v-for="(value, key, index) in myObject">
            {{ index }} - {{ key }} - {{ value }}
        </li>
    </ul>
    <br>
    <!-- 初始值是1而不是0 -->
    <span v-for="n in 10">{{ n }}</span>
    <!-- 注意：v-for也可以用在template身上 -->
    <!-- v-if和v-for同时使用在其他的vue模板中有提到过 -->
    <br>
    <!-- key 是用于优化虚拟 DOM 渲染的一个特殊属性，它并不会 显示 在前端页面上。key 主要用于帮助 Vue 跟踪每个组件或 DOM 元素，以便在数据变化时能够高效地更新 DOM -->
    <!-- 如果不使用 key，Vue 仍然能够渲染和更新列表项，但会影响性能和更新的准确性。特别是在你有动态数据（如排序、删除、修改等操作）时，缺少 key 会让 Vue 无法精确地追踪和更新 DOM 元素，从而导致潜在的性能问题和渲染错误 -->
    <div v-for="item in itemss" :key="item.id">
        <button @click="removeItem(item.id)">removeItem</button>
        {{ item.name }}
    </div>

    <li v-for="n in evenNumbers">{{ n }}</li>

    <br>
    <li v-for="item in sets">sets-{{ item }}</li>
    <br>
    <li v-for="item in setsReverse">sets-reverse-{{ item }}</li>

    <!-- 不自动将item注入组件的原因是，这会使组件与v-for工作方式紧密耦合 -->
    <!-- <MyComponent v-for="(item, index) in items" :item="item" :index="index" :key="item.id" /> -->
</template>

<style></style>