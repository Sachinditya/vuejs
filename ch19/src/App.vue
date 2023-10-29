<script setup>
import HelloWorld from './components/HelloWorld.vue'

</script>


<template>
  <div>
    <!-- <HelloWorld>
      <template v-slot:header>
   <h1>this is header</h1>
  </template>
 
   <h1>this is default</h1>
  
  <template v-slot:footer>
   <h1>this is footer</h1>
  </template>
    </HelloWorld> -->
    <HelloWorld v-slot="slotProps">
      <h1>{{ slotProps.nm }}</h1>
      <h1>{{ slotProps.age }}</h1>
    </HelloWorld>
  </div>
</template>


<style scoped>

</style>
