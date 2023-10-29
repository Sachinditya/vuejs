<script setup>
import {ref} from 'vue'
let isActive=ref(false);
let num=ref(5);
let type=ref('C');
</script>

<template>
  <div>
    <!-- v-if Directive -->
    <!-- <h1 v-if=true> true v-if</h1>
    <h1 v-if="isActive">isActive true v-if</h1>
    <h1 v-if="num===5">num is 5 v-if</h1>
    <h1 v-if="num>=5">num is greater than equal to 5 v-if</h1> -->

    <!-- v-if v-else Directive -->
    <!-- <h1 v-if="isActive">isActive true v-if</h1>
    <h1 v-else>isActive False v-else</h1> -->

    <!-- v-if v-else-if v-else Directive -->
    <!-- <h1 v-if="type==='A'">A</h1>
    <h1 v-else-if="type==='B'">B</h1>
    <h1 v-else-if="type==='C'">C</h1>
    <h1 v-else-if="type==='D'">D</h1>
    <h1 v-else>Wrong input</h1> -->

    <!-- v-if Directive on template tag and we can also apply v-if v-else and v-if v-else-if v-else-->
    <!-- <template v-if="isActive">
       <h1>Line 1</h1>
       <h1>Line 2</h1>
       <h1>Line 3</h1>
       <h1>Line 4</h1>
    </template>  -->
    <!-- <template v-else>
       <h1>Line 5</h1>
    </template>  -->


    <!-- <div v-if=true>
       <h1>Line 1</h1>
       <h1>Line 2</h1>
       <h1>Line 3</h1>
       <h1>Line 4</h1>
      </div> -->

        <!-- v-if Directive -->
    <!-- <h1 v-show=true> true v-show</h1>
    <h1 v-show="isActive">isActive true v-show</h1>
    <h1 v-show="num===5">num is 5 v-show</h1>
    <h1 v-show="num>=5">num is greater than equal to 5 v-show</h1> -->




  </div>
</template>

<style scoped>

</style>