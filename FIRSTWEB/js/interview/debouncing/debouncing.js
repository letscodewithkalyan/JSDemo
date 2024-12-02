let count = 0;
function callApi(event){
    console.log("Calling api:  " + count++)
}

const debounce = function (fn, d) {
    let timer;
    return function(){
        const context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() =>{
          fn.apply(context,args);
        }, d)
    }
}

const betterFunction = debounce(callApi, 400)