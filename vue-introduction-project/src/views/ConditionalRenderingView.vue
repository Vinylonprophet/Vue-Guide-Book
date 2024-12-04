<script setup>
import { ref } from 'vue';

const awesome = ref(true)

const isDisplayTemplate = ref(true)
</script>

<template>
    <!-- 注意：v-if和v-for同时使用并不推荐 -->
    <!-- 真同时存在一个元素上的话，v-if会被优先执行 -->
    <button @click="awesome = !awesome; isDisplayTemplate = !isDisplayTemplate">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh! Angular is better!!! ✌️</h1>

    <!-- v-show没有v-else -->
    <!-- v-show不支持在template上使用 -->
    <!-- v-if更高的切换开销 -->
    <!-- v-show有更高的初始渲染开销（本质而言是切换css的display） -->
    <h1 v-show="false">Angular is awesome!</h1>

    <template v-if="isDisplayTemplate">
        <div style="color: white;">
            ok
        </div>
    </template>
</template>

<style></style>