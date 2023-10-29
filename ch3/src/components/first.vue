<script setup>
import {ref} from "vue";

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
    <h1>{{ a+b }}</h1>
  
 
</template>
<style scoped>
</style>