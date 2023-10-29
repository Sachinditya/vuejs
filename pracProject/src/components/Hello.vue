<script setup>
let divs=document.getElementsByClassName('div')
let btn=document.querySelector(".btn")
btn.addEventListener("dragstart",()=>{
  btn.className+="hold"
  setTimeout(() => {
    btn.className="hide";
  }, 0);
})
btn.addEventListener("dragend",(e)=>{
  e.target.className='btn'
})
for(box of divs){
  box.addEventListener("dragover",(e)=>{
e.preventDefault();

  })
  box.addEventListener("drop",(e)=>{
e.target.append(btn)

  })
}

</script>
<template>
  <div class="container">
    <div class div>
        <h1>box1</h1>
        <button class="btn" draggable="true">click me</button>
    </div>
    <div class="div"></div>
    <div class="div"></div>
    <div class="div"></div>
    
  </div>
</template>
<style scope>
.div{
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin-inline: 5px;
    
}
.container{
    display: flex;
}
.hold{
  border: 2px solid red;
}
.hide{
  display: none;
}
</style>
