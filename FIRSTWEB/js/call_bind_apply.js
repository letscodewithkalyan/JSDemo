function greet(name){
    console.log(`Hello ${name}, My name is ${this.name}. `)
}

const person = {
    name: "Kalyan",
};

greet.call(person,"John")
//Hello John, My name is Kalyan. 

function greetApply(name, city){
   console.log(`Hello ${name}, My name is ${this.name}, I live in ${city} `)
}

const person2 = {
    name: "Kalyan",
};
greetApply.call(person2, "John" , "Atlanta")
greetApply.apply(person2,["John", "Atlanta"])
//Hello John, My name is Kalyan, I live in Atlanta
greet.apply(person2, ["John"])
//Hello John, My name is Kalyan. 


function greetBind(name, city){
    console.log(`Hello ${name}, My name is ${this.name}, I live in ${city} `)
 }
 
 const person3 = {
     name: "Kalyan",
 };
 
 var bindedFun = greetBind.bind(person2)
 bindedFun("John, Atlanta")
 //Hello John, My name is Kalyan, I live in Atlanta