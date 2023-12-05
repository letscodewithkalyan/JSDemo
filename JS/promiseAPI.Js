const promise1= new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve("Promise1 resolved");
  }, 10000);
});

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise2 resolved");
    }, 10000);
});

const promise3 = new Promise((resolve, reject) =>{
setTimeout(() => {
    resolve("Promise3 resolved");
}, 10000);
});

async function getData(){
    var result = await Promise.all([promise1,promise2,promise3]);
    console.log(result);
}

getData();