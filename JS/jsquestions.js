//find maxmimum number in array
function findMax(arr){
    return Math.max(...arr);
}

//Palindrome
function isPalindrome(str){
    return str === str.split('').reverse().join('');
}

//ReverseString
function reverseString(str){
    return str.split('').reverse().join('');
}

//Filter even numbers in aray
function evenNumbers(arr){
    return arr.filter(a => a%2 == 0);
}

//facrorial
function findFactorial(num){
   if(num <= 1){
    return 1;
   }
   return num * findFactorial(num-1);
}

//deepClone
function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}

const numberArr = [10,3,14, 11, 5]
console.log("Maximum number " + findMax(numberArr));
console.log("EvenNumbers " + evenNumbers(numberArr));
console.log("Reverse String " + reverseString("Kalyan"));
console.log("Is Palindrome " + isPalindrome("Kalyan"));
console.log("Factorial "+ findFactorial(5));