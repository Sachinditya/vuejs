<script setup>
import {ref} from 'vue'
let name=ref("")
let gender=ref([])
let hobbies=ref([])
</script>
<template>
    <div>
        <p>hobbies:{{ hobbies }}</p>
        <p>name:{{ name }}</p>
        <p>gender:{{ gender }}</p>
        <input type="text" v-model="name">
        <label for="male">Male:</label>
        <input type="checkbox" id="male" value="male" v-model="gender" >
        <label for="female">FeMale:</label>
        <input type="checkbox" id="female" value="female" v-model="gender">
        <label for="cric">cricket:</label>
        <input type="radio" value="cricket" id="cric" v-model="hobbies">
        <label for="foot">Football:</label>
        <input type="radio" value="football" id="foot" v-model="hobbies">
        
    </div>
</template>
<style scoped></style>