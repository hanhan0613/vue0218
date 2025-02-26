<template>
    <div class="app">
        <h2>Hello Vue 3!</h2>
        <!-- 导航区 -->
        <div class="navigate">
            <!-- 可添加active-class -->
            <RouterLink to="/home">首页</RouterLink>
            <RouterLink to="/news">新闻</RouterLink>
            <RouterLink to="/about">关于</RouterLink>
        </div>
        <!-- 展示区 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'App',//组件名
}
</script>

<script lang="ts" setup>
import { RouterView,RouterLink } from 'vue-router';

</script>

<style scoped>
.app {
    background-color: skyblue;
    padding: 20px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
}
</style>
