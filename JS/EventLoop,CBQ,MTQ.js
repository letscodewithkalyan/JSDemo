
console.log("a");
//Callback Queue(Task Queue)
setTimeout(() => {
    console.log("Time Out")
}, 0);
//MicroTask Queue
Promise.resolve(()=>{console.log("Promise")}).then((res) => res());
console.log("b");


//Output
//a, b, Promise, TimeOut
//https://www.jsv9000.app/