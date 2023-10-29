<script setup>
import {ref,watch,reactive,watchEffect} from 'vue'
//watchers single ref
// let heartRate=ref(0);
// watch(heartRate,(newheartRate,oldheartRate)=>{
//   console.log("newheartRate is ",newheartRate);
//   console.log("oldheartRate is ",oldheartRate);
//   if(newheartRate>oldheartRate &&newheartRate>120){
//     alert("calm down take deep breath");
//   }
// })

//reactive objects new and old heartrate value will be same

// let state=reactive({heartRate:90,patient:{name:"rahul"}})
// watch(state,(newheartRate,oldheartRate)=>{
//   console.log("newheartRate is ",newheartRate);
//   console.log("oldheartRate is ",oldheartRate);
//   // if(newheartRate>oldheartRate &&newheartRate>120){
//   //   alert("calm down take deep breath");
//   // }
// })

//using getter functions

// let state=reactive({heartRate:90,patient:{name:"rahul"}})
// watch(()=>state.heartRate,(newheartRate,oldheartRate)=>{
//   console.log("newheartRate is ",newheartRate);
//   console.log("oldheartRate is ",oldheartRate);
//   // if(newheartRate>oldheartRate &&newheartRate>120){
//   //   alert("calm down take deep breath");
//   // }
//   if(newheartRate>oldheartRate &&newheartRate>120){
//     alert("chill down");
//   }
// })


// reactive object usng spread operator
let state=reactive({heartRate:90,patient:{name:"rahul"}})
watch(()=>{
  return {...state}
},(newheartRate,oldheartRate)=>{
  console.log("newheartRate is ",newheartRate);
  console.log("oldheartRate is ",oldheartRate);
 
})

//multiple data source
// const heartRate=ref(85);
// const fear=ref(10);
// watch([heartRate,fear],(newheartRate,oldheartRate)=>{
//   console.log("newheartRate is ",newheartRate);
//   console.log("oldheartRate is ",oldheartRate);
//   console.log("newheartRate",newheartRate[0]);
 
// })
// function increaseHeartFear(){
//   heartRate.value+=5;
//   fear.value+=10;
// }
// function decreaseHeartFear(){
//   heartRate.value-=5;
//   fear.value-=10;
// }
// const count=ref(0);
// watch(count,async(newValue,oldValue)=>{
//   try {
//     const res=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data=res.json;
//     console.log(data);
//   } catch (error) {
//     console.log("could not recah the api",error);
//   }
// },
// {immediate:true})

//deep in watching and reactive element it will track any changes that happen
// const state=reactive({
//   heartRate:85,
//   fear:10,
//   patient:{bedCharge:500}
// })
// watch(()=>state,(newValue,oldValue)=>{
//   console.log("newValue",newValue);
//   console.log("oldValue",oldValue);
// },{
//   deep:true
// });

//Flush now watcher will called after update

// let heartRate=ref(0);
// watch(heartRate,(newheartRate,oldheartRate)=>{
//  console.log("watchers called");
// },{
//   flush:'post'
// })

//watchers-watch effect
// let count=ref(0);
// watchEffect(()=>{
//   console.log("count : " ,count.value);
// })

//stop watch
let count=ref(0);
let unwatch=watchEffect(()=>{
  console.log("count : " ,count.value);
})
function stopWatch(){
  unwatch();
}


</script>

<template>
  <div>
    <!-- <h1>Heart Rate tracking system</h1>
    <h1 v-if="heartRate>0">Heart Beats Per Min:{{ heartRate }}</h1>
    <h1 v-if="heartRate<=0">Sorry you are dead</h1>
    <button @click="heartRate+=5">Increase</button>
    <button @click="heartRate-=5">Decrease</button> -->

      <!-- <h1>Heart Rate tracking system</h1>
    <h1 v-if="state.heartRate>0">Heart Beats Per Min:{{state.heartRate }}</h1>
    <h1 v-if="state.heartRate<=0">Sorry you are dead</h1>
    <button @click="state.heartRate+=5">Increase</button>
    <button @click="state.heartRate-=5">Decrease</button> -->

    <!-- multiple data source -array -->
    <!-- <h1>heartRate tracking sysytem</h1>
    <h1 v-if="heartRate>0">Heart Beats Per Min:{{ heartRate }} and fear: {{ fear }}</h1>
    <button @click="increaseHeartFear">Increase</button>
    <button @click="decreaseHeartFear">Decrease</button> -->
    <!-- <h1>count:{{ count }}</h1>
    <button @click="count++">Change Data</button> -->
<!-- 
    <h1>Hospital Charge:{{ state.patient.bedCharge }}</h1>
    <button @click="state.patient.bedCharge+=500">change bed</button> -->

    <!-- <h1>Heart Rate tracking system</h1>
    <h1 v-if="heartRate>0">Heart Beats Per Min:{{ heartRate }}</h1>
    <h1 v-if="heartRate<=0">Sorry you are dead</h1>
    <button @click="heartRate+=5">Increase</button>
    <button @click="heartRate-=5">Decrease</button> -->

    <h1>count is {{ count }}</h1>
    <button @click="count+=5">change val</button>
    <button @click="stopWatch">Stopwatch</button>

  </div>
</template>

<style scoped>

</style>
