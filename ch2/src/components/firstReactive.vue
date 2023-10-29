<script setup>
import {ref} from "vue";
// import {reactive} from 'vue';
// let num=reactive({a:30,b:30});
// setTimeout(() => {
//     console.log(num.a,num.b);
//     num.a=40;
//     num.b=90;
// }, 5000);
// 
// let obj=reactive({
//   num:{age:25},
//   arr:[1,2,3,4,5]
// })
// setTimeout(() => {
//   console.log(obj);
//   console.log(obj.num);

//   console.log(obj.num.age);
//   console.log(obj.arr);
  
// }, 2000);
let a=ref(10);
let b=ref(20);
setTimeout(() => {
    console.log('a',a.value);
    console.log('b',b.value);
    a.value=20;
    b.value=30;
    console.log('a',a.value);
    console.log('b',b.value);
}, 2000);
</script>
<template>
    <h1>{{ a.value+_b.value }}</h1>
  
 
</template>
<style scoped>
</style>