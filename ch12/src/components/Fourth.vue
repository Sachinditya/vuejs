<script setup>
import {ref,reactive,computed} from "vue";
let employee=ref([
    {name:"aditya",salary:10000},
    {name:"rahul",salary:200000}
])
let salaryGreater=computed(()=>{
    employee.value.filter((emp)=> emp.salary>10001);
})

</script>

<template>
<div >
    <!-- <template v-for="n in 5">
       <h1>price</h1>
    </template> -->
    <!-- <div v-for="({name,salary},i) in employee" :key="i">
        <h1 v-if="salary>10001">{{ name }}  {{ salary }}</h1>
    </div> -->
    <h1 v-for="(details,i) in salaryGreater" :key="i">{{details.name }} {{details.salary }}</h1>

</div>
</template>

<style scoped>

</style>