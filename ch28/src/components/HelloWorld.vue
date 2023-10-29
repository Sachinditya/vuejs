<script setup>
import {ref,reactive,computed} from 'vue'
// let isActive=ref(true);
// let haserror=ref(false);
// let myClass=reactive({
//   active:true,
//   "text-danger":true
// })
// let arr=ref([[1,2,3],[4,5,6],[7,8,9]])
// let myObject=reactive({
//   name:"aditya",
//   age:23,
//   work:"wasting time"
// })
// let items=ref([
//   {id:1,label:"10 soaps"},
//   {id:2,label:"15 chips"}
// ])
// let newitem=ref("");

function warn(message, event) {
  // now we have access to the native event
  if (event) {
    event.target.value="submitted"
    console.log(event.target);
    event.preventDefault()
  }
  alert(message)
}
</script>

<template >
 <!-- <div>
  <h1 class="netw" :class="{active:isActive,'text-danger':haserror}">hello</h1>

  <p :class="myClass">this is passing object class</p>
 </div> -->
 <!-- <div>
<h3 v-for="a in arr">
  {{ a }}
  <p v-for="item in a">{{ item }}</p>
</h3>
<h1 v-for="(val,key) in myObject">{{ key }} : {{ val }}</h1>
 </div> -->
 <!-- <div>
<form v-on:submit.prevent="items.push({id:items.length+1,label:newitem})">
  <h1>save shopping item</h1>
  <input type="text" v-model="newitem" placeholder="add item">
 <button type="submit" >submit</button>
</form>
<ul>
  <li v-for="l in items">{{ l.label }}</li>
</ul>
 </div> -->
 <div>
  <!-- using $event special variable -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- using inline arrow function -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>
 </div>
</template>

<style scoped>

</style>
