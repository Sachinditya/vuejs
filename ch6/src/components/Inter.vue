<script setup>
import {ref,reactive,computed} from 'vue';
// let firstName=ref("Sonam");
// let lastName="Sharma";
// const fullName=()=>{
//     return (firstName.value+" "+lastName);
// }
// setTimeout(() => {
//     firstName.value="rahul";
// }, 3000);
// const fullName=computed(()=>{
//     return (firstName.value+" "+lastName);
// })
// setTimeout(() => {
//     firstName.value="rahul";
// }, 5000);
let firstName=ref("Sonam");
let lastName=ref("Sharma");
const fullName=computed({
    get(){
        console.log("getter called");
        return (firstName.value+" "+lastName.value);
    },
    set(newValue){
        [firstName.value,lastName.value]=newValue.split(" ");
    }
})
setTimeout(() => {
    fullName.value="Rahul Kumar";
}, 3000);




</script>
<template>
<div>
<!-- <h1>{{ fullName() }}</h1> -->
<h1>{{ fullName }}</h1>
</div>
</template>
<style scoped>
</style>