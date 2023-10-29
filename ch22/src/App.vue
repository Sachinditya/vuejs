<script setup>
import Hello from './components/HelloWorld.vue'
import {ref}from'vue'
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
  
} from 'vue';
const showComp=ref(true);
const count=ref(0);
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
 <div> <h1>App cmponent -Parent</h1>
 <Hello v-if="showComp"/>
 <button @click="showComp=!showComp">Show/Hide</button>
</div>

</template>

<style scoped>

</style>
