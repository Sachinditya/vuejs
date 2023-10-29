<script setup>
import { useAttrs } from "vue";
import cusomBtn from "./cusomBtn.vue";

const thebutton=()=>{
    console.log("the child button is clicked");
}
//accessing fallthrough attribute in javascript
const attrs=useAttrs();
console.log(attrs);
</script>

<script>

export default {
    inheritAttrs:false,
}
</script>



<template>
    <!-- attribute inheritence -->
    <!-- <button id="app-id">click</button> -->
    <!-- <button @click="thebutton">click</button> -->
    <!-- <cusom-btn/> -->
    <!-- <h2>Attributes fallthrough:{{ $attrs }}</h2> -->
 
 <!-- <button v-bind="$attrs">click</button> -->
  <!-- attribute inheritence on multiple root nodes -->

  <h1>click1</h1>
  <h2 v-bind="$attrs">click2</h2>
  <h3>click3</h3>
</template>

<style scoped>

</style>
