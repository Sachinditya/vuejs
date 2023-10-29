<script setup>
import {ref} from 'vue';
import HelloWorld from './components/HelloWorld.vue';
let count=ref(0);
// const emit=defineEmits(["incCount"]);
// function incCount(){
//   count.value++;
// }
// function incCount11(n){
//   count.value=count.value+n;
// }
const emit=defineEmits({
  formSubmit:(name)=>{
    if(name) return true
    else {
      console.log("Invalid");
      return false;
    }
  }
})
function done(name){
  emit("formSubmit",name)
  console.log("form is submitted"+" name is : "+name);
}
</script>

<template>
<div>
  <p>{{ count }}</p>
  <!-- <HelloWorld @increaseCount="count++"/> -->
  <!-- <HelloWorld @increaseCount="incCount11"/> -->
  <!-- <HelloWorld @formSubmit="done"/> -->
  <HelloWorld />
</div>
</template>

<style scoped>

</style>