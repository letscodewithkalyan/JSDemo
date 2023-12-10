// Hoisting
// a undenfined
// b,c  Uncaught reference error, Cannot access "b" before initialization
// b,c are temparal deadzone
function logBelow(){
    console.log(a);
    
    var a = 10;
    let b = 10;
    const c = 10;
}
logBelow();

//Eventloop, Callback queue and MicroTaskqueuue

//Implicit and explicit binding
//Need understand the this and arrow
//Arrow function this refers to global window
var obj = {
    name: "Kalyan",
    display: function(){
        console.log(this.name);
    },
};

var obj1 ={
    name: "pidugu",
}

obj.display.call(obj1);
obj.display();

var arrowObj = {
    name: 'P',
    display: () =>{
        console.log(this.name);
    }
}

arrowObj.display.call(obj1);