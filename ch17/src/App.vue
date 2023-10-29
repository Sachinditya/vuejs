<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Person from './services/first.js'
import {ref} from 'vue'
// const firstName="sudhanshu";
// const lastName="jha";
const employee=ref({
  name:"rahul",
  company:"HCL"

})
let person=new Person("aditya","jha")

</script>

<template>
<div>
  
  <!-- <HelloWorld name="rahul"/>
  <HelloWorld name="tushar"/>
  <HelloWorld name="abhishek"/> -->

  <!-- static props -->
  <!-- <HelloWorld fullName="aditya jha" /> -->

  <!-- dynamic props -->

  <!-- <HelloWorld :first-name="firstName" :last-name="lastName"/> -->

  <!-- prop validation -->
  <!-- <HelloWorld  :age=25 /> -->

  <!-- passing arrays -->
  <!-- <HelloWorld :cities="['delhi','mumbai','bihar']"
  :employee="{name:anchal,company:'newgen'}" -->

  <!-- binding multiple properties using  object  -->
  <!-- <HelloWorld v-bind="employee"/> -->

  <!-- custom validator -->
  <!-- <HelloWorld name="Sonam" :age="35"/> -->

  <HelloWorld :author="person"/>
  
  

</div>
</template>

<style scoped>

</style>

