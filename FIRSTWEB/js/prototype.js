const name = "kalyan"
const age = 31
function getName(){

}
const arr = []
const obj = {

}

const person = {
    name: "Kalyan",
    city: "Bangalore",
    getIntro: function(){
      console.log(this.name + " " + this.city)
    }
}

const person2 = {
    name: "Pidugu"
}

//Never do this
person2.__proto__ = person

console.log(person.getIntro()) //Kalyan Bangalore
console.log(person2.getIntro()) //Pidugu Bangalore

Function.prototype.myBind = function() {
    console.log("Print bind")
}

Object.prototype.bindInfo = function(){
    
}
x = 43;
const x = 42;
console.log(x.toString())
console.log(42.toString()) //error
console.log(x instanceof Number) //False
console.log(x.__proto__) //[Number]