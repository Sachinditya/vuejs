<script setup>
import {ref,reactive} from "vue";
// objects of objects
const frameworks=reactive({
    view:{id:1,title:"learn vue js",author:"Geeky shows",fee:100},
    JavaScript:{id:2,title:"learn Namaste JavaScript",author:"Akshay Saini",fee:1000}
})
</script>

<template>
  <!-- <h1 v-for="frame in frameworks">{{ frame }}</h1> -->
  <!-- <h1 v-for="frame in frameworks">{{ frame.id}} {{ frame.title }}</h1> -->
  <h1 v-for="{id,title,author,fee} in frameworks">{{ id}} {{ title }} {{ author }}  {{ fee }}</h1>
</template>

<style scoped>

</style>