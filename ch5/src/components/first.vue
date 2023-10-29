<script setup>
import {ref,reactive,isProxy,isReactive,isRef,unref,toRef} from 'vue';
// let a=10;
// let b=ref(10);
// let num=reactive({count:1});
// console.log("is a ref",isRef(a));
// console.log("is b ref",isRef(b));
// console.log("is num reactive",isReactive(num));
// console.log("is num return proxy",isProxy(num));
// console.log("is b undef return inner value",unref(b));
let student =reactive({
    name:"aditya"
})
let nameref=toRef(student,"name");
console.log("nameref",nameref);
console.log("is nameref ref ",isRef(nameref));//it is for single property of object

</script>

<template>

</template>

<style scoped>


</style>