// const p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("P1 Resolved Value!!");
//     }, 1000);
// });

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject("P2 Resolved Value!!");
//     }, 2000);
// });

// Promise.any([p1,p2])
//     .then((res) => console.log(res))
//     .catch((err) => {console.log(err); console.log(err.errors)})


function sum(a,b,c){
    return a+b+c;
}
console.log(sum(1,2,3)) //6

function curryingSum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(curryingSum(1)(2)(3)) //6