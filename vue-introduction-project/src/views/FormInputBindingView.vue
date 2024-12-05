<template>
    <!-- <input :value="text" @input="event => text = event.target.value"> -->
    <!-- 上下等价 -->
    <!-- v-model 还可以用于不同类型的输入，<textarea>、<select>等 -->
    <!-- <input v-model="text"> -->

    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit ok ?">
    <!-- textare 不支持插值表达式 -->
    <!-- <textarea name="" id="">{{ message }}</textarea> -->
    <!-- 需要使用 v-model -->
    <textarea name="" id="" v-model="message"></textarea>

    <p>复选框</p>
    <input type="checkbox" name="" id="" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <p>复选框训练场</p>
    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>

    <p>单选框训练场</p>
    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked" @change="logPicked" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" @change="logPicked" />
    <label for="two">Two</label>

    <p>选择器训练场</p>
    <div>Selected: {{ selected }}</div>

    <p>如果在selected后面加上multiple就是多选</p>
    <select v-model="selected" @change="logSelected">
        <!-- 注意option可以使用数组 -->
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>

    <br>

    <div>
        Checked names: {{ selectedValues }}
        <br>
        <!-- 复选框 vue特有的attributes -->

        <input type="checkbox" id="复选" v-model="selectedValues" :true-value="dynamicTrueValue"
            :false-value="dynamicFalseValue" />
    </div>

    <!-- 可以修改字面量 -->
    <p>{{ objectSelected }}</p>
    <select v-model="objectSelected">
        <!-- 内联对象字面量 -->
        <option :value="{ number: 123 }">123</option>
    </select>

    <div>
        input lazy
        <input v-model.lazy="msg" />
        <p>Message: {{ msg }}</p>
    </div>

    <div>
        input number
        <input v-model.number="age" />
        <p>Age: {{ age }}</p>
    </div>

    <div>
        input trim
        <input v-model.trim="trimtext" />
        <p>Trim Text: {{ trimtext }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('')
const checked = ref(false)

const checkedNames = ref([])

const picked = ref('One')

function logPicked() {
    console.log(picked.value);
}

const selected = ref('')

function logSelected() {
    console.log(selected.value);
}

const dynamicTrueValue = ref('true-attribute');
const dynamicFalseValue = ref('false-attribute');
const selectedValues = ref('true-attribute');

const objectSelected = ref({ number: 567 })

const msg = ref('')
const age = ref(0)
const trimtext = ref('')
</script>

<style></style>