import {ref,onMounted,onUnmounted} from 'vue';
import { useEventListner } from './event';
import {faker} from "@faker-js/faker";
export function useName(){
    const firstName=ref();
    const lastName=ref();


    // function updateName(){
    //     firstName.value=faker.person.firstName();
    //     lastName.value=faker.person.lastName();
    //   }

//use composables in composables
     useEventListner(window,'mousemove',()=>{
      firstName.value=faker.person.firstName();
        lastName.value=faker.person.lastName();
     })

      return{firstName,lastName};
}