import {ref,onMounted,onUnmounted} from 'vue';
export function useEventListner(Target,event,callback){
    onMounted(()=>Target.addEventListener("mousemove",callback));
    onUnmounted(()=>Target.removeEventListener("mousemove",callback));
}