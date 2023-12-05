function kcounter(){
    let count = 0;
   function increment(){
        count++;
        console.log(count);
    }
    
    function decrement(){
        count--;
        console.log(count);
    }
}

const counterF = kcounter();

function increment(){
    counterF.increment()
}

function decrement(){
    counterF.decrement()
}

function outerFunction(){
    function check(){
        var a = 10000;
        function innerCheck(){
            console.log(a);
        }
        return innerCheck
    }
    return check
}
let checkSum = outerFunction()
checkSum()()

