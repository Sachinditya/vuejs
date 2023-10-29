<script setup>
import{ref} from "vue"
import adImg from '../assets/adidas.png'
const admImg=ref(adImg);
</script>

<template>

<div>
 
  <!-- <img src="../assets/images/adidas.png" alt="adidas" width="200" height="200" > -->
<img :src="admImg" alt="adidas" width="200" height="200">
</div>
</template>

<style scoped>

</style>
