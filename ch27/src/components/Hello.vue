
<script setup>
// import {ref,onMounted,onUnmounted} from 'vue';
// import {faker} from "@faker-js/faker";
// const firstName=ref();
// const lastName=ref();
// function updateName(){
//   firstName.value=faker.person.firstName();
//   lastName.value=faker.person.lastName();
// }
// onMounted(()=>window.addEventListener("mousemove",updateName));
// onUnmounted(()=>window.removeEventListener("mousemove",updateName))

import {useName} from "../composables/name.js"
import {usefetch} from "../composables/fetch.js"
let url="https://jsonplaceholder.typicode.com/posts/1";
const {data,error}=usefetch(url)
const {firstName,lastName}=useName();
</script>
<template>
    <div>
        <!-- <h1>FullName: {{ firstName }}  {{ lastName }}</h1> -->
        <div v-if="error"> this is error</div>
        <div v-else-if="data"><pre>{{ data }}</pre></div>
        <div v-else>loading.....</div>
    </div>
</template>
<style scoped></style>