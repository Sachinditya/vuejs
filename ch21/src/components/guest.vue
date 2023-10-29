<script setup>
import { inject } from 'vue';
// const prop=defineProps(["name"]);
// const naam=inject("name");

//inject with default value
// const naam=inject("name","aditya");

// inject with function
// const naam=inject("name",()=>"rahul",true)

//passing multiple injects
// const name=inject("name")
// const age=inject("age")
// const course=inject("course")

// injects with reactive state
const cost =inject("cost")

</script>

<template>
<div>
  <!-- <h1>guest:{{ name }}</h1>   -->

  <!-- <h2>name value from app:{{ naam }}</h2> -->

  <!-- <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
  <h1>{{ course}}</h1> -->

  <h1>{{ cost }}</h1>


</div>
</template>

<style scoped>

</style>