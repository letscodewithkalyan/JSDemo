//Curring using Bind Method
function multiply(x, y){
   return x*y
}

const multiplyTwo = multiply.bind(this,2)
console.log(multiplyTwo(3)) //6

const multiplyThree = multiply.bind(this,3)
console.log(multiplyThree(4)) //12

//Curring using recursion
function addition(x) {
    return function(y){
        return x+y
    }
}

const additionTwo = addition(2)
console.log(additionTwo(3)) //5

console.log(addition(3)(5)) //8
