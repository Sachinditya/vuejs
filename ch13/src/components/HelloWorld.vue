<script setup>
// event handler-inline handler
import {ref,reactive,computed} from 'vue';
let count=ref(0);

//calling method
// function say(str){
//   console.log(str);
// }
// function say(str,e){
//   console.log(str+" "+e);
// }
// function say(e){
//   console.log("event",e);
// }
function say(e){
  console.log("event",e);
}

</script>

<template>
 <div>
  <!-- <h1>{{ count }}</h1> -->
<!-- <button v-on:click="count++">Increase</button> -->
<!-- <button @click="count++">Increase</button> -->
<!-- <button @click="say('bye')">click</button> -->
<!-- <button @click="say($event)">click</button> -->
<!-- <button @click="say('hello',$event)">click</button> -->
<!-- <button @click="(event)=>say(event)">click</button> -->

<!-- method handler -->

<button @click="say">click</button>

 </div>
</template>

<style scoped>
</style>
