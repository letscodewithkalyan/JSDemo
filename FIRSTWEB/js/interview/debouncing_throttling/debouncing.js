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

function clickButton(message){
    console.log("Button clicked ")
}

const throttle = function(fn,d){
    let isExecuted = true
    return function(...args){
        if(isExecuted){
            isExecuted = false
            fn.apply(this, args)
            setTimeout(()=>{
                isExecuted = true
            },d)
        }
    }
}

const throttleFunction = throttle(clickButton,1000)

const throttleSecond = function(fn, d){
    let time = 0 
    return function(...args){
        if(Date.now() - time > d){
            fn.apply(this, args)
            time = Date.now()
        }
    }
}

