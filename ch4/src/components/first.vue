<script setup>
import {ref,reactive} from "vue";

let obj=ref({count:0})
setTimeout(() => {
    console.log(obj);
    console.log(obj.value);
    console.log(obj.value.count);
}, 3000);
// let obj={count:ref(0)}

// setTimeout(() => {
//     console.log(obj);
//     console.log(obj.count);
//     console.log(obj.count.value);
//     obj.count.value=1;
// }, 3000);
// let obj3=ref({count:ref(0)});
// console.log(obj3.value.count);
// let students= reactive([ref("adi"),ref("rahul")])
// setTimeout(() => {
//     console.log("students",students);
//     console.log("students[0]",students[0]);
//     console.log("students",students[0].value);
    
// }, 3000);
</script>
<template>
   <div>
    <!-- <h1>{{ obj.count }}</h1>
    <h1>{{ obj.count.value }}</h1> -->
   </div>
    
</template>
<style scoped>
</style>