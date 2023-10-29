<script setup>
import {ref,reactive,computed} from 'vue';
let Formdata=reactive({
  name:"aditya",
  email:"",
  password:"",
  message:"",
  HouseRentAllowance:"",
  driving:"",
  hobbies:[],
  states:""

})
const stateOption=ref([
  {text:"delhi",value:"Delhi"},
  {text:"bihar",value:"Bihar"}
])


</script>

<template>
 <div>
  <pre>{{ Formdata }}</pre>
 <form>
  <div>
<label for="name">Name:</label>
<input type="text" id="name" v-model="Formdata.name">
  </div>
  <div>
<label for="email">Email:</label>
<input type="text" id="email" v-model="Formdata.email">
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="Formdata.password">
  </div>
  <div>
    <label for="message">Message</label>
    <textarea id="message" v-model="Formdata.message"></textarea>
  </div>
  <div>
    <label for="hra">HouseRentAllowance</label>
    <input type="checkbox" id="hra" v-model="Formdata.HouseRentAllowance">
  </div>
  <div>
    <label for="driving">Driving:</label>
    <input type="checkbox" id="driving" v-model="Formdata.driving">
  </div>
  <div>
    <span>Hobbies</span>
    <label for="cooking">Cooking:</label>
    <input type="checkbox" id="Cooking" v-model="Formdata.hobbies" value="cooking">
    <label for="singing">Singing:</label>
    <input type="checkbox" id="singing" v-model="Formdata.hobbies" value="singing">
    <label for="gaming">Gaming:</label>
    <input type="checkbox" id="gaming" v-model="Formdata.hobbies" value="gaming">

  </div>
  <div>
    <select v-model="Formdata.states">
      <option v-for="state in stateOption" :value="state.value">{{ state.text }}</option>
    </select>
  </div>
  <button type="submit" @click.prevent>Submit</button>
 </form>
 </div>
</template>

<style scoped>

</style>
