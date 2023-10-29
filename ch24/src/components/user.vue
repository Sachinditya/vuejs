<script setup>
import {ref} from 'vue'
let count=ref(0);
let a=20;
function increaseCount(){
    count.value++;
}
defineExpose({
    count,a,increaseCount
})
</script>
<template>
    <div>
        <h1>count:{{ count }}</h1>
        <h1>A:{{ a }}</h1>
        <h1>user component</h1>
        <button @click="increaseCount">Increase</button>
    </div>
</template>
<style scoped></style>