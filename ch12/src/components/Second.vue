<script setup>
import {ref,reactive} from "vue";
// objects of objects
const frameworks=reactive({
    view:{id:1,title:"learn vue js",author:"Geeky shows",fee:100},
    JavaScript:{id:2,title:"learn Namaste JavaScript",author:"Akshay Saini",fee:1000}
})
</script>

<template>
    <!-- objects of objects -->
  <div v-for="(frame,i) in frameworks" :key="i">  {{ frame }}
    <h1 v-for="item in frame">{{ item }}</h1>
  </div>
</template>

<style scoped>

</style>