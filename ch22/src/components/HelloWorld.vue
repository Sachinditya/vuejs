<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
  
} from 'vue';

onBeforeMount(()=>{
  console.log("onBeforeMount called -parent");
})
onMounted(()=>{
  console.log("onMounted called -parent");
})
onBeforeUpdate(()=>{
  console.log("onBeforeUpdate called -parent");
})
onUpdated(()=>{
  console.log("onUpdated called -parent");
})
onBeforeUnmount(()=>{
  console.log("onBeforeMount called -parent");
})
onUnmounted(()=>{
  console.log("onBeforeMount called -parent");
})
</script>

<template>
<div>
 <h1>Hello component-child</h1>

</div>
</template>

<style scoped>

</style>
