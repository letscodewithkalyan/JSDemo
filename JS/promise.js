
async function getPromise(){
    console.log("GetPromise called");
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("GetPromise resolved value !!");
        }, 10000);
    });
}
const promise = new Promise((resolve, reject) =>{
    console.log("promise called");
    setTimeout(() => {
        resolve("Promise resolved value !!");
    }, 10000);
});

const promise2 = new Promise((resolve, reject) =>{
    console.log("promise 2 called");
    setTimeout(() => {
        resolve("Promise resolved value !!");
    }, 10000);
});

async function getData(){
    const val = await promise
    console.log(val);
    
    console.log("First finished");
    const val2 = await promise2
    console.log(val2);

    const second = await getPromise()
    console.log(second);
}

getData();