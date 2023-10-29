<script setup>
import ind from "./components/ind.vue"
import jind from "./components/jind.vue"

// import { useCssModule } from "vue";
// console.log(useCssModule("classes"));



// v-bind
let theme={textcolor:"red"}

</script>

<template>
 <div>
  <ind/>
  <jind/>
  <!-- use of module -->
  <!-- <h1 :class="$style.bgBlue">this is app component</h1> -->
  <h1 :class="classes.bgBlue">this is app component</h1>



  <!-- <h1 class="bg-blue text-red">this is app component</h1> -->
 </div>
</template>

<!-- <style scoped>


/* deep selector work for scoped css only it will apply on other than root of child componenet*/
/* .bg-blue,
:deep(.bg-blue){
  background-color: rgb(139, 139, 216);
} */



/* .bg-blue{
  background-color: blue;
} */


/* global selector */

/* :global(.text-red){
  color: red;
} */

</style> -->


<!-- <style module>
.bgBlue{
  background-color: blue;
}
</style> -->


<!-- style module with name -->
<style module="classes">
.bgBlue{
  background-color:v-bind("theme.textcolor")
}
</style>
