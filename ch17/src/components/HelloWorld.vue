<script setup>
import {ref,reactive,computed} from 'vue';
// const prop=defineProps(["fullName"])
// const prop=defineProps(["firstName","lastName"]);
// const fname=ref(prop.firstName)
// const fullName=computed(()=>prop.firstName+" "+prop.lastName)

// const prop=defineProps(["fullName","age"])
// const props=defineProps({
//   fullName:String,
//   age:Number
// })
// const props=defineProps({
//   fullName:{type:String,required:true,default:"aditya kumar"},
//   age:Number
// })

// const props=defineProps({
//   cities:Array,
//   employee:Object,
// })
// const props=defineProps({
//     name:String,
//     company:String,
//   })
// const props=defineProps({
//     name:{
//       type:String,
//       validator(propValue){
//         return ["Sonam","Rahul"].includes(propValue)
//       }
//     },
//     age:{
//       type:Number,
//       validator:(propValue)=> {
//         // propValue>0
//         if(propValue>18 && propValue<30){
//           return true;
//         }
//         else{
//           console.error("age should be between 18 and 30");
//           return false;
//         }
//       }
//     },
//   })
const prop=defineProps({
  author:Person,
})


</script>

<template>
<div>
  <!-- <h1> name:{{fullName }}</h1> -->
  <!-- <h1>{{ firstName }}  {{ lastName }}</h1> -->
  <!-- <h1>{{ fname }}</h1> -->
  <!-- <h1>{{ fullName }}</h1> -->
  <!-- <h1>name:{{ fullName }}  age:{{ age }}</h1> -->

  <!-- <h1>{{ cities }}</h1>
  <h1 v-for="city in cities">city:{{ city }}</h1> -->
  <!-- <h1>{{ employee }}</h1> -->

  <!-- <h1>{{ name }} {{ company }}</h1> -->
  <!-- <h1>{{ name }} {{ age}}</h1> -->

  <h1>{{author.firstName}}</h1>
</div>
</template>

<style scoped>

</style>
