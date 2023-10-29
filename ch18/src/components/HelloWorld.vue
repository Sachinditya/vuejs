<script setup>
import {ref} from 'vue'
import BaseInput from "./first.vue"
let name=ref("");
</script>

<template>
<div>
   <!-- <button @click="$emit('increaseCount')">Increase</button> -->
 <!-- <button @click="$emit('increaseCount',11)">Increase</button> -->
 <!-- <form @submit.prevent="$emit('formSubmit',name)">
  <label for="name">Name:</label>
  <input type="text" id="name" v-model="name">
  <button type="submit">submit</button>
 </form> -->
 <BaseInput/>
</div>
</template>

<style scoped>

</style>
