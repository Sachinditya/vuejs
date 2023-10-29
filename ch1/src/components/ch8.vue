<script setup>
const msg="hello world";
const myId="adi";
const url="http://www.google.com";
const attributeName="href";
const isdisabled=true;
const obj={
    class:"first",
    id:"id1"
}

</script>
<template>
<div>
    {{ msg }}
    <h1 v-bind:id="myId">first id</h1>
    <h1 v-bind="obj">my id and class</h1>
    <h1 :[attributeName]="url">first boolean</h1>
 <button :disabled="isdisabled">click</button>
</div>
</template>
<style scoped>

</style>