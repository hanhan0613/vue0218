<template>
    <div class="person">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <h2>地址：{{address}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts" setup>
//响应式
import { ref } from 'vue'

let name = ref('张三')
let age = ref(18)
let tel = ref('123456789')
let address = ref('北京市')

function changeName(){
    name.value = '李四'
}
function changeAge(){
    age.value += 1
}
function showTel(){
    alert(tel.value)
}
</script>

<style scoped>
.person {
    background-color: rgb(187, 190, 192);
    padding: 30px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
}
</style>