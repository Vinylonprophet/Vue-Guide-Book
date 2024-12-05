<template>
    <button @click="greet">Greet</button>
    <br>
    <button @click="(event) => warn('Cannot be submitted! ', event)">Submit</button>
    <!-- v-on有自己的事件修饰符，比如click.stop.prevent -->

    <!-- 监听按键事件 -->
    <!-- 提供按键别名，系统按键修饰符，鼠标按键修饰符等等 -->
    <input type="text" name="" id="" v-model="inputValue" @keyup.enter="consoleKey">
</template>

<script setup>
import { ref } from 'vue';

const name = ref('Vue.js')

const inputValue = ref('')

function greet(event) {
    alert(`Hello ${name.value}!`)

    if (event) {
        alert(event.target.tagName)
    }
}

function warn(message, evnet) {
    if (event) {
        event.preventDefault
    }
    alert(message)
}

function consoleKey() {
    console.log(inputValue.value)
}
</script>

<style></style>