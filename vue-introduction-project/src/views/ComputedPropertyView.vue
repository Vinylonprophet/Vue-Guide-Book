<script setup>
import { computed, reactive } from 'vue';


const author = reactive({
    name: 'Vinylon',
    books: [
        'Angular - 16',
        'Angular - 18'
    ]
})

// computed() 预期接受一个getter函数，返回值为一个计算属性ref
// 计算属性ref在模板中也会自动解包，无需添加 .value
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})

function calculateBooksMessage() {
    return author.books.length > 0 ? 'Yes' : 'No'
}

function dropBook() {
    author.books.pop()
}

const dateNow = computed(() => {
    return Date.now()
})
</script>
<template>
    <button @click="dropBook">drop book</button>

    <p>Has published books:</p>
    <!-- 如果依赖的数据没有变化，计算属性会直接返回之前计算的结果，而不会重新执行计算逻辑 -->
    <span>{{ publishedBooksMessage }}</span><br>
    <!-- 下面的方式在结果上两者相同 -->
    <!-- 不同之处在于计算属性值会基于其响应式依赖被缓存 -->
    <!-- 每次页面渲染时，方法都会被调用。无论其依赖的数据是否发生变化，方法都会重新执行计算 -->
    <span>{{ calculateBooksMessage() }}</span><br>

    <!-- 具体举例 -->
    <span>{{ dateNow }}</span><br>
    <span>{{ Date.now() }}</span><br>
</template>
<style></style>