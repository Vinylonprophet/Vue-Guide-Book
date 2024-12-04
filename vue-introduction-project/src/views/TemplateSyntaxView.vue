<script>
export default {
    data() {
        return {
            msg: "文本插值",
            vBindTest1: "vBindTest1",
            vBindTest2: "vBindTest2",

            number: 8,
            message: "message",
            idSelector: "idSelector",

            date: Date.now(),

            seen: true,
            url: "https://www.baidu.com",
            attributeName: "href",
            eventName: "focus",

            objectOfAttrs: {
                id: 'container',
                class: 'wrapper',
                style: 'background-color:green'
            }
        }
    }
}
</script>

<template>
    <!-- 文本插值 -->
    <span>
        Message: {{ msg }}
    </span>
    <!-- 插入html使用v-html -->
    <p>Using v-html directive: <span v-html="msg"></span></p>

    <!-- v-bind -->
    <p v-bind:id="vBindTest1">vbind test 1</p>
    <p :id="vBindTest2">vbind test 2</p>
    <button :disabled="true">Button</button>

    <!-- v-on -->
    <button :disabled="false" @click="seen = !seen">Button</button>

    <!-- v-bind绑定多个值 -->
    <button v-bind="objectOfAttrs">Button</button>

    <!-- 使用js表达式 -->
    <!-- 注意：只支持单一表达式 -->
    <p>{{ number + 1 }}</p>
    <p>{{ "ok" ? "true" : "false" }}</p>
    <p>{{ message.split('').reverse().join('') }}</p>
    <div :id="`list-${idSelector}`">1</div>

    <!-- 调用函数 -->
    <!-- 在绑定的表达式中使用一个组件暴露的方法 -->
    <time :datetime="date">{{ date }}</time>

    <!-- 指令 -->
    <!-- 内置指令v-if 包括上面提到的 v-bind 和 v-html 都是内置指令 -->
    <p v-if="seen">Now u can see me</p>

    <!-- 参数 arguments -->
    <!-- 这里是指url是传进来的 -->
    <!-- 动态参数表达式的值应该是字符串/null -->
    <!-- 注意这里的动态参数中空格和引号都是违法的 -->
    <a :href="url" @[eventName]="seen">动态url</a>
    <!-- 浏览器默认转小写 -->
    <!-- 为什么单文件组件不受此限制？ -->
    <!-- 单文件组件（例如 Vue 的 .vue 文件）是由构建工具（如 Vue CLI、Vite 等）处理的，它们将模板编译为 JavaScript，这时不会受 HTML 属性名称大小写转换的影响。因此，在 .vue 文件内使用大写字母不会出现问题。 -->
    <a :[attributeName]="url">浏览器默认转小写</a>

    <!-- 修饰符是以点开头的特殊后缀，表明指令需要以一些特殊方式被绑定 -->
    <!-- .prevent修饰符会告知v-on指令对触发的事件调用event.preventDefault() -->
    <form @submit.prevent="add()">...</form>
</template>

<style>
#vBindTest1 {
    color: red;
}

#vBindTest2 {
    color: greenyellow;
}

#container {
    font-size: larger;
}

.wrapper {
    color: aqua;
}
</style>
