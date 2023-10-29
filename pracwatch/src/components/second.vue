<script setup>
const prop=defineProps(["fullName"])
// const prop=defineProps(["details"])
</script>
<template>
    <div>
        <h1>fullName:{{ fullName }}</h1>
        <!-- <h1>details:{{ details }}</h1> -->
    </div>
</template>
<style scoped></style>