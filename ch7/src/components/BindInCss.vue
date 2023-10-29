<script setup>
import {ref,reactive} from 'vue';
let cl=ref("red");
let bg=ref("aqua");
let styleObj=reactive({
    color:'red',
    backgroundColor:'yellow'
})
let styleObj1=reactive({
   fontSize:"200px"
})
</script>
<template>
<div>

    <h1 style="background-color: blueviolet;color: red;">hello world</h1> 
    <h1 v-bind:style="{clolor:'red',backgroundColor:'blue'}">hello Aditya</h1>
    <h1 v-bind:style="{clolor:'red','background-color':'yellow'}">hello Aditya bhai</h1>
    <h1 v-bind:style="{clolor:cl,backgroundColor:bg}">hello Aditya bhai</h1>
    <h1 :style="styleObj">this is v-bind:style="object" </h1>
    <h1 :style="[styleObj,styleObj1]">this is v-bind:style="object-1" </h1>

</div>
</template>
<style scoped>
</style>