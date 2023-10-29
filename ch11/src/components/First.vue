<script setup>
import {ref,reactive,computed} from 'vue';
let students=ref(["Rahul","Sonam","Rohit"]);
const employee=ref([{name:"aditya",salary:10000},{name:"aditya",salary:10000},{name:"aditya",salary:10000}])
const languages=ref([
    ["java","Android"],
    ["python","ML"],
    ["javaScript","webDevlopment"]
])
const desc=ref({
    name:'aditya',
    destiny:'unluckiest',
    future:"dont know"
})
</script>

<template>
 <div>
    <!-- array of strings -->
    <!-- <h1 v-for="st in students" >{{ st }}</h1> -->
    <!-- <h1 v-for="(st,i) in students" :key="i">{{ i }}{{ st }}</h1> -->


   <!-- array of objects -->
    <!-- <h1 v-for="(employee,i) in employee" :key="i">{{ i }}   {{ employee.name }}  {{ employee.salary }}</h1> -->

    <!-- nested v-for -->
    <!-- <div v-for="(lang,i ) in languages" :key="i">
        <h1 v-for="item in lang">{{ item }}</h1>

    </div> -->


    <!-- object and key value pair iteration -->
    <!-- <h1 v-for="(key,i) in desc" :key="i">{{ i }}   :  {{ key }}</h1> -->
 </div>
</template> 

<style scoped>

</style>