<template>
    <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"> <br>
    <button @click="changeFullName">将全名改为</button>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    全名：<span>{{fullName}}</span><br>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Person',//组件名
}
</script>
<script lang="ts" setup>
//响应式
import{ref,computed} from 'vue'
let firstName = ref('张')
let lastName = ref('三')

//这么定义的fullName是一个计算属性，且是只读的
// let fullName = computed(()=>{
//     console.log(1)
//     return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+'-'+lastName.value
// })
function changeFullName(){
    firstName.value = '李'
    lastName.value = '四'
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

