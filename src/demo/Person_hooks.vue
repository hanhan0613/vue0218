<template>
    <div class="person">
        <h2>当前求和为：{{ sum }},放大10倍后：{{ bigSum }}</h2>
        <button @click="add">点我加一</button>
        <hr>
        <img v-for="(dog, index) in dogList" :key="index" :src="dog">
        <br>
        <button @click="getDog">添加一只狗</button>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Person',//组件名
}
</script>

<script lang="ts" setup>
import useSum from '../hooks/useSum'
import useDog from '../hooks/useDog'

const { sum, add,bigSum } = useSum()
const { dogList, getDog } = useDog() 
</script>

<style scoped>
.person {
    background-color: rgb(187, 190, 192);
    padding: 30px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
}
</style>
