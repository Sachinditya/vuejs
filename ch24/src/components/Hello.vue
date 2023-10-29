<script setup>
import {ref,onMounted,watchEffect} from 'vue';
//template ref used for accesing element or child
// let inputRef=ref("aditya");
// console.log(inputRef.value);

//accessing ref
// onMounted(()=>{
// console.log(inputRef.value);
// inputRef.value.focus();
// })

//watching ref
// const inputRef=ref()
// watchEffect(()=>{
//     console.log("watcheffect function called");
//     console.log("inputRef.value",inputRef.value);
//     if(inputRef.value){
//         console.log(inputRef.value);
//         inputRef.value.focus();
//     }else{
//         console.log("not mounted yet");
//     }
// })

//ref inside v-for
let students=ref(["adi","rahul","sonam"])
// let studentsRef=ref([]);
// onMounted(()=>{
//     console.log(studentsRef.value);
// })

//ref function 
let elements=ref([]);
onMounted(()=>{
    console.log(elements.value);
})


</script>
<template>
    <!-- <div>
        <label for="username">username:</label>
        <input type="text"  id="username" ref="inputRef">
    </div> -->


    <!-- <div>
        <h1 v-for="(student,i) in students" :key="i" ref="studentsRef">students:{{ i }}   {{ student }}</h1>
    </div> -->


    <div>
        <h1 v-for="(student,i) in students" :key="i" :ref="(el)=>{
            elements[i]=el;
        }">students:{{ i }}   {{ student }}</h1>
    </div>
</template>
<style scoped></style>