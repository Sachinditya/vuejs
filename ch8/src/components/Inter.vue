<script setup>
import {ref,reactive,computed} from 'vue';
let isActive=ref(true);
let isImportant=ref(true);
let classObj=reactive({
    active:"true",
    fBold:"true",
    textChange:"true"
})
// let myClass=computed(()=>({
//     active:isActive.value,
//     fBold:isImportant.value,
// }))
let arr=()=>{
    // return 2+3;
    console.log("this is me");

}
const classBg=ref("bg-green")
const errorClass=ref("text");
let obj={
    name:"aditya0",
    lastName:isActive
}
</script>
<template>
<div>
<h1 :class="{act:isActive}">Hello 1</h1>
<!-- <h1 class="text-1" :class="{act:isActive}">Hello 2</h1> -->
<h1  :class="{act:isActive,'f-bold':isImportant}">Hello 3</h1>
<h1  v-bind:class="classObj">Hello 4</h1>
<h1  v-bind:class="myClass">Hello 5</h1>
<!-- <h1  v-bind:class="[classBg,errorClass]">Hello 5</h1>
<h1  v-bind:class="[classBg,errorClass]">Hello 5</h1>
<h1  v-bind:class="[isActive?classBg : '',errorClass]">Hello 5</h1> -->
<h1 :class="$attrs.class">hello 6</h1>
</div>
</template>
<style scoped>
</style>