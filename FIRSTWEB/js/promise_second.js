const constPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("From Const Promise");
        resolve("Promise Resolved Value!!");
    }, 1000);
});

async function funtionPromise() {
    return new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log("From function Promise");
        resolve("Promise Resolved Value!!");
    }, 1000)});
}

async function execute(){
    const a = await constPromise;
    console.log(a);
    //Calling second one
    const b = await constPromise;
    console.log(b);

    const c = await funtionPromise()
    console.log(c);
    const d = await funtionPromise();
    console.log(d);
}

execute();