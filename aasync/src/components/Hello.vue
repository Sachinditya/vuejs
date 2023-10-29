<script setup>
import {ref,defineAsyncComponent} from 'vue'
import usersLoading from "../components/usersLoading.vue"
import usersErrors from "../components/usersErrors.vue"
// import user from "./user.vue"

// let showUserComponent=ref(false);
// const Asyncusercomp=defineAsyncComponent(()=>
// import("../components/user.vue")
// );


let showUserComponent=ref(false);
const Asyncusercomp=defineAsyncComponent({
    loader:()=>import("../components/user.vue"),
    loadingComponent:usersLoading,
    delay:200,
    errorComponent:usersErrors,
    timeout:20
})
</script>
<template>
    <div>
        <!-- async component -->
        <!-- <h1>hello component</h1>
     
        <button @click="showUserComponent=!showUserComponent">show/hide</button>
        <Asyncusercomp v-if="showUserComponent"/> -->

        <!-- async components loading and error components -->
        <h1>hello component</h1>
     
        <button @click="showUserComponent=!showUserComponent">show/hide</button>
        <user v-if="showUserComponent"/>
    </div>

</template>
<style scoped>

</style>