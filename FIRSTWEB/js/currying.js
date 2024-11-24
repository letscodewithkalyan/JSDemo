
function sum(a,b,c){
    return a+b+c;
}

function curryingSum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(sum(1,2,3)) //6
console.log(curryingSum(1)(2)(3)) //6

//with arrow functions
const curryMultiply = num1 => num2 => num3 => num1 * num2 * num3
console.log(curryMultiply(2)(3)(4)) //24

//Accessing object properties
function prop(obj){
     return function (key) {
        return obj[key]
    }
}

const user = {
    name: 'kalyan',
    age: 31
}

//creating curried function to access information
const accessUser = prop(user)

console.log(accessUser('name'))
console.log(accessUser('age'))

//Infirite currying
function add(num1){
    return function(num2){
        if(num2){
            return add(num1 + num2)
        }
        return num1
    }
}

console.log(add(4)(5)(6)())