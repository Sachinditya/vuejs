<script setup>
import {ref,watch,reactive} from 'vue';
// let heartRate=ref(85);
// let state=reactive({heartRate:85})
// watch(state,(newVal,oldVal)=>{
//   console.log("new value is :",newVal);
//   console.log("old value is :",oldVal);
//   if(newVal>120&&newVal>oldVal){
//     alert("calm down guys ");
//   }
// })
// let state=reactive({heartRate:85})
// watch(()=>state.heartRate,(newVal,oldVal)=>{
//   console.log("new value is :",newVal);
//   console.log("old value is :",oldVal);
 
// })
// multipl
// let heartRate=ref(85);
// let fear=ref(10);
// watch([heartRate,fear],(old,naye)=>{
//   console.log(old);
//   console.log(naye);
// })
// function heartRateFear(){
//   heartRate.value+=10;
//   fear.value+=10;
// }
let state=reactive({
  heartRate:10,
  fear:40,
  patients:{bedcharge:500}

})
watch(()=>state,(old,naya)=>{
  console.log(old);
  console.log(naya);
},{
  deep:true
})
</script>

<template>
 <div>
  <!-- <h1>heartRate is {{ heartRate }}</h1>
  <button @click="state.heartRate+=10">increaseHeartRate</button>
  <button @click="state.heartRate-=10">decreaseHeartrate</button> -->

  <!-- <button @click="heartRateFear">increaseHeartRate</button> -->
  <button @click="state.patients.bedcharge+=500">Increase</button>

 </div>
</template>

<style scoped>

</style>
