<script setup>
import { onMounted } from 'vue';


// onMounted(() => console.log("onMounted === 组件完成初始渲染并创建DOM节点后运行代码"))
// 如果是用 setTimeout，由于在异步延迟的回调中，组件实例可能已经不再存在或者被销毁，因此在回调中直接访问组件实例时，可能会出现问题，导致无法正常工作
// 丢失
// 丢失
// 丢失
setTimeout(() => {
    onMounted(() => {
        console.log("onMounted === 组件完成初始渲染并创建DOM节点后运行代码")
    })
}, 100)
</script>

<template>
    <img width="100%" src="../assets/lifecycle.png" alt="">
</template>