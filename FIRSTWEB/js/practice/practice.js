
//Currying
function multiply(a){
    return function (b){
        if(b){
            return multiply(a*b)
        }
        return a
    }
}

console.log(multiply(5)(6)(7)(8)())

function expensive(){
    console.log("Calling expensive function")
}

function debouncing(fn, interval){
    let timer
    return function(){
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, interval)
    }
}

function throttle(fn, interval){
    let isExecuted = true
    return function() {
        if(isExecuted){
            fn.apply(fn, arguments)
            isExecuted = false
            setTimeout(() => {
                isExecuted = true
            }, interval);
        }
    }
}

const delayDebouncing = debouncing(expensive, 3000)
const delayThrottling = throttle(expensive, 10000)