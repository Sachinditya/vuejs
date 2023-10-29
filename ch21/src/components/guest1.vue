<script setup>
import { inject } from 'vue';
const count=inject("count");
//mutating count value from injected component we need to avoid
const guestCount=()=>{
    console.log("guestCount is increased");
    count.value++;
}
</script>
<template>
<div> 
  <h1>guest1 count:{{ count }}</h1>
  <button @click="guestCount">click</button></div>
</template>
<style scoped>

</style>