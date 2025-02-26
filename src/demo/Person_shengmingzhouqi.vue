<template>
    <div class="person">

    </div>
</template>
<script lang="ts">
export default {
    name: 'Person',//组件名
}
</script>
<script lang="ts" setup>
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
//数据
let sum = ref(0)
//方法
function add(){
    sum.value++
}
//创建
console.log('创建')

//挂载
onBeforeMount(()=>{
    console.log('挂载')
})
//挂载完毕
onMounted(()=>{
    console.log('挂载完毕')
})
//更新前
onBeforeUpdate(()=>{
    console.log('更新前')
})
//更新完毕
onUpdated(()=>{
    console.log('更新完毕')
})
//销毁前
onBeforeUnmount(()=>{
    console.log('销毁前')
})
//销毁完毕
onUnmounted(()=>{
    console.log('销毁完毕')
})
//先子后父
</script>


<style scoped>
.person {
    background-color: rgb(187, 190, 192);
    padding: 30px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
}
</style>
