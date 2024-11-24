const marks = 99
const marksExplicit = String(marks); // Explicit "42"
const marksImplicit = 99 + ""; // Implicit "42"

const num = 1234
const stringNumber = '1234'

console.log(num == stringNumber) //true
console.log(num === stringNumber) //false

console.log(0 == false) //true
console.log(0 === false) //false

console.log('' == false) //true
console.log('' === false) //false