document.querySelector("#parent")
    .addEventListener("click",(event)=>{
        if(event.target.tagName == "LI"){
            console.log(event.target.id)
        }
});

document.querySelector("#form")
    .addEventListener("keyup",(event) =>{
        console.log(event.target.dataset)
        if(event.target.dataset.uppercase != undefined){
            event.target.value = event.target.value.toUpperCase();
        }
})