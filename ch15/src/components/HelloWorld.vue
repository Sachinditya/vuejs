<script setup>
import {ref,reactive,computed} from 'vue';
let Formdata=reactive({
  name:"aditya",
})


</script>

<template>
 <div>
  <pre>{{ Formdata }}</pre>
 <form>
  <div>
<label for="name">Name:</label>
<input type="text" id="name" v-model="Formdata.name">
  </div>
  <button type="submit" @click.prevent>Submit</button>
 </form>
 </div>
</template>

<style scoped>

</style>
