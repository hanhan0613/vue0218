<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我加一</button>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改人物</button>
        <h2>reactive</h2>
        <h2>姓名：{{ person_reactive.name }}</h2>
        <h2>年龄：{{ person_reactive.age }}</h2>
        <button @click="changeName_reactive">修改名字</button>
        <button @click="changeAge_reactive">修改年龄</button>
        <button @click="changePerson_reactive">修改人物</button>
        <h2>情况4</h2>
        <h2>姓名：{{ person4.name }}</h2>
        <h2>年龄：{{ person4.age }}</h2>
        <h2>车：{{ person4.car.c1 }} {{ person4.car.c2 }}</h2>
        <button @click="changeName4">修改名字</button>
        <button @click="changeAge4">修改年龄</button>
        <button @click="changeC14">修改第一台车</button>
        <button @click="changeC24">修改第二台车</button>
        <button @click="changeCar4">修改车组</button>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Person',//组件名
}
</script>
<script lang="ts" setup>
import { ref, watch, reactive } from 'vue'
//监视情况一，监视【ref】定义的数据
let sum = ref(0)
function add() {
    sum.value++
}

const stopWatch = watch(sum, (newValue, oldValue) => {
    console.log(`sum从${oldValue}变为${newValue}`)
    if (newValue >= 10) {
        stopWatch()
    }
})

//监视情况二，监视【ref】定义的对象类型，若想监视对象内部变化，需要手动开启深度监视
let person = ref({ name: 'tom', age: 18 })
function changeName() {
    person.value.name += '~'
}
function changeAge() {
    person.value.age += 1
}
function changePerson() {
    person.value = { name: 'jerry', age: 20 }
}
watch(person, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
}, { deep: true, immediate: true })//深度显示,old和new的值一样//立即执行old的值为undefined

//监视情况三，监视【reactive】定义的对象类型
//reactive局限性,不能修改整体对象，只能修改对象内部属性
let person_reactive = reactive({ name: 'tom', age: 18 })
function changeName_reactive() {
    person_reactive.name += '~'
}
function changeAge_reactive() {
    person_reactive.age += 1
}
function changePerson_reactive() {
    Object.assign(person_reactive, { name: 'jerry', age: 20 })//assign,赋值或分配
}
watch(person_reactive, (newValue, oldValue) => {
    console.log('person_reactive变化了', newValue, oldValue)
})//默认开启深度监视

//监视情况四，监视【ref】或【reactive】定义的【对象类型】数据中的某个属性
/*注意点如下：
1.若该属性值不是【对象类型】，需要写成函数形式
2.若该属性值依然是【对象类型】，可以直接编，也可以写成函数，建议写成函数
*/
let person4 = reactive({ name: 'tom', age: 18, car: { c1: '奔驰', c2: '宝马' } })
function changeName4() {
    person4.name += '~'
}
function changeAge4() {
    person4.age += 1
}
function changeC14() {
    person4.car.c1 = '奥迪'
}
function changeC24() {
    person4.car.c2 = '大众'
}
function changeCar4() {
    person4.car = { c1: '特斯拉', c2: '玛莎拉蒂' }
}
//person4.name不是一个对象属性，且概属性是一个基本类型时，需要写成一个函数类型
watch(()=>{return person4.name}, (newValue, oldValue) => {
    console.log('person4.name变化了', newValue, oldValue)
})

//修改单个可以监视，修改整个对象不可以监视person4.car
//修改整个对象可以监视，修改单个不可以监视()=>person4.car
//都可以监视()=>person4.car后加deep:true
watch(()=>person4.car, (newValue, oldValue) => {
    console.log('person4.car变化了', newValue, oldValue)
}, { deep: true })
</script>


<style scoped>
.person {
    background-color: rgb(187, 190, 192);
    padding: 30px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
}
</style>
