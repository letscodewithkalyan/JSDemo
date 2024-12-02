document.querySelector("#grandparent")
.addEventListener('click',(event)=>{
    console.log("Grand Parent Clicked")
}, true)

document.querySelector("#parent")
.addEventListener('click',(event)=>{
    console.log("Parent Clicked")
})

document.querySelector("#child")
.addEventListener('click',(event)=>{
    console.log("Child Clicked")
    event.stopPropagation()
})