//sum(1)(2)(3)(4)
//Currying
//Function currying is a technique where function with multiple arguments transformed into series of functione where each functions takes single argument
let sum = function(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}

console.log(sum(1)(2)(3)(4)());
console.log(sum(1)(2)(3)(4)(5)(6)());

let sumOptimised = (a) => {
    return (b) => b ? sumOptimised(a+b) : a;
}

let sum3 = a => b => b ? sum(a+b) : a;

console.log(sum3(1)(2)(3)(4)());
console.log(sum3(1)(2)(3)(4)(5)(6)());