
//Caching function
function memoize(fn, context){
  const memoizeObj= {};
  return function(...args){
     var argsCache = JSON.stringify(args);
     if(!memoizeObj[argsCache]){
        memoizeObj[argsCache]=fn.call(context || this, ...args)
     }
     return  memoizeObj[argsCache]
  }
}

const clumySquare = (num1, num2) =>{
    for(let i = 1; i<=100000000; i++){}
    return num1 * num2;
}

const memoizeClumsy = memoize(clumySquare , this);

console.time("First Call");
console.log(memoizeClumsy(100,222));
console.timeEnd("First Call");

console.time("Second Call");
console.log(memoizeClumsy(100,222));
console.timeEnd("Second Call");

console.time("Third Call");
console.log(memoizeClumsy(100,222));
console.timeEnd("Third Call");