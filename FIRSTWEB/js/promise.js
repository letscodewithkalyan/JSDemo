const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("From Promise");
        resolve("Promise Resolved Value!!");
    }, 1000);
});

function getData(){
    p.then((res) => console.log(res));
    console.log("Test promise execution flow");
}

getData();

// async function handlePromise(){
//     const val = await p;
//     console.log(val);
//     console.log("Test async execution flow");
// }

// handlePromise();