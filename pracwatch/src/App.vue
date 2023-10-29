<script setup>
import second from './components/second.vue'
import {ref} from 'vue';
let fullName=ref("Aditya Kumar");

</script>

<template>
 <second :full-name="fullName" />
 <!-- <second  :details="['sonam',25]"/> -->
</template>

<style scoped>

</style>
