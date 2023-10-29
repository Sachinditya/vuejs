<script setup>
import Hello from './components/Hello.vue'

import user from './components/user.vue'
import {ref,onMounted} from 'vue'
let userRef=ref(null);
onMounted(()=>{
    console.log(userRef.value);
})


</script>

<template>
<!-- <Hello/> -->
<user ref="userRef"/>
</template>

<style scoped>

</style>
