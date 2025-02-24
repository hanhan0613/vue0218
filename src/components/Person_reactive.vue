<template>
    <div class="person">
        <h2>一辆{{car.brand}}车,价值{{car.price}}万</h2>
    </div>
</template>

<script lang="ts" setup>
//响应式
import { ref } from 'vue'
import { reactive } from 'vue';

let car = reactive({brand:'奔驰',price:100})

function changePrice(){
    car.price += 10
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