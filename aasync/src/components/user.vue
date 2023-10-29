<script setup>
import {ref} from 'vue'
let students=ref(["adi","rahul","sonam"])
</script>
<template>
    <div>
        <h1 v-for="(student,i) in students" :key="i" ref="studentsRef">students:{{ i }}   {{ student }}</h1>
    </div>
</template>
<style scoped>

</style>