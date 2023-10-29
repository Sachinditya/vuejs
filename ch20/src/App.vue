<script setup>
import Hello from './components/HelloWorld.vue'
// const bgcbtn='pink';
// const btnClicked=()=>{
//   console.log("button is clicked");
// }
const theBg="red"


</script>


<template>
<div>
  <!-- <Hello id="app-id" :style="{backgroundColor:bgcbtn}"/> -->
  <!-- <Hello @click="btnClicked"/> -->

  <!-- merging class and style will merged -->
  <!-- <Hello class="app-class"/> -->


  <!-- merging id will not merged -->
  <!-- <Hello id="app-id"/> -->

  <!-- event merging -->
  <!-- <Hello @click="btnClicked"/> -->

  <!-- customEvent  it will follow attribute and merging nested class inheritence-->
  <!-- <Hello class="btncust"/> -->

  <!-- disabling attribute inheritence -->
  <Hello :style="{backgroundColor:theBg}"/>
  <!-- <Hello/> -->
</div>
</template>

<style scoped>

</style>
