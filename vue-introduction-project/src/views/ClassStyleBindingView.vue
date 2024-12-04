<script setup>
import { reactive, ref } from 'vue';

const isActive = ref(true)

const activeClass = ref('active')
const errorClass = ref('text-background')

const styleObject = reactive({
    color: "skyblue",
    fontSize: "30px"
})

</script>

<template>
    <button @click="isActive = !isActive">modify text color</button>
    <div :class="{ active: isActive }">text</div>
    <div :class="[activeClass, errorClass]">text</div>
    <div :style="styleObject"> :style example </div>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">样式多值</div>
</template>

<style>
.active {
    color: red;
}

.text-background {
    background-color: aqua;
}
</style>