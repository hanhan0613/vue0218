<template>
    <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Person',//组件名
}
</script>
<script lang="ts" setup>
//响应式
import { reactive } from 'vue';
import { toRefs } from 'vue';
import { toRef } from 'vue'

let person = reactive({name:'张三',age:18})

let {name,age} = toRefs(person)
let nl = toRef(person,'name')
let al = toRef(person,'age')

function changeName(){
    person.name += '~'
    console.log(nl.value)
}
function changeAge(){
    person.age += 1
    console.log(al.value)
}
</script>

<style scoped>
.person {
    /* Add your component styles here */
    background-color: aliceblue;
    padding: 30px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
}
</style>