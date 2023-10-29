<script setup>
import {ref,reactive,computed} from 'vue';
//Event Modifiers
// function checkData(){
//   console.log("checkData");
// }


// function onSubmit(e){
// // e.preventDefault();

//   console.log("form submitted");
// }

//key modifiers
// function onKeyPress(){
//   console.log("Enter key is pressed");
// }

//system modifiers
// function onKeyPressAltEnter(){
//   console.log("Alt+Enter key is pressed");
// }
// function onKeyctrl(){
//   console.log("ctrl key is pressed");
// }

//exact modifier
// function onexact(){
//   console.log("nosys key is pressed");
// }

//mousebutton modifiers
function onRightClick (){
  console.log("Onright click key is pressed");
}


</script>

<template>
 <div>
    <!-- <a @click.prevent="checkData" href="https://www.google.com">go to google</a> -->
    <!-- <form @click.prevent="onSubmit"><button type="submit">submit</button></form> -->

    <!-- <input @keyup.enter="onKeyPress" type="text"> -->

    <!-- <input @keyup.alt.enter="onKeyPressAltEnter" type="text"> -->
    <!-- <input @click.ctrl="onKeyctrl" type="text"> -->
    <!-- <input @keyup.alt.enter="onKeyPressAltEnter" type="text"> -->

    <!-- <button @click.exact="onexact">click</button> -->

    <!-- <button v-on="{mousedown:onmousedown,mouseup:onMouseup}">click</button> -->
    <button @click="firstEvent(),secondEvent()">click</button>

    <input @click.right="onRightClick" type="text" >
 </div>
</template>

<style scoped>

</style>
