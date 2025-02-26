<template>
    <div class="app">
        <h1>Hello Vue 3!</h1>
        <Person/>
    </div>
</template>

<script lang="ts">
import Person from './components/Person.vue';
export default {
    name: 'App',//组件名
    components:{Person},
    setup() {
        return {
            msg: 'Hello Vue 3!'
        }
    }
}
</script>
<script lang="ts" setup>


</script>

<style scoped>
.app {
    background-color: skyblue;
    padding: 20px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
}
</style>
