//without creating array multipletimes acess elements using closure.

function getArrayIndex(){
    const arr = Array(100).fill('a');
    return (index) => arr[index];
}

const arrayFunc = getArrayIndex();
console.log(arrayFunc(10));
