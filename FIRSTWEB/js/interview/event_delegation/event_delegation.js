document.querySelector("#parent").addEventListener("click",(event)=>{
    if(event.target.tagName == "LI"){
        console.log(event.target.id)
    }
});