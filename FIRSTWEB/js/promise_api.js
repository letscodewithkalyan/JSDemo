const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("P1 Resolved Value!!");
    }, 1000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("P2 Resolved Value!!");
    }, 2000);
});

Promise.any([p1,p2])
    .then((res) => console.log(res))
    .catch((err) => {console.log(err); console.log(err.errors)})

