<script setup>
import user from './components/user.vue'
import { provide,readonly,ref } from 'vue';
// provide("name","sonam")
// provide("age",27)
// provide("course",{
//   name:"vue js",
//   duration:30
// })
// provide("name")

// provide reactive state
// const price=ref(100)
// provide("cost",price);

// workimg with recativity
const count=ref(0);
let increaseCount=()=>{
  console.log("increase Count called");
  count.value++;
}
provide("count",readonly(count));


</script>

<template>
 <div>
  <h1>App count:{{ count }}</h1>
  <button @click="increaseCount">increseFromApp</button>
  <user/>
 </div>

</template>

<style scoped>

</style>
