const student = {
    firstName: "Pidugu",
    lastName: "Kalyan",
    wakeUp: function(){
        this.firstName
    }
}
student.study = "JavaScript";
console.log(student)

const student2 = {}
student2.firstName = "Pidugu"
student2["lastName"] = "Kalyan"
student2["wakeUp"] = function(){
    console.log("6am")
}
console.log(student2)

const student3 = new Object()
student3.firstName = "Pidugu"
student3["lastName"] = "Kalyan"
student3["wakeup"] = function(){
    console.log("6am")
}
console.log(student3)

function person(firstName, lastName, study){
    this.firstName = firstName
    this.lastName = lastName
    this.study = study
}
const student4 = new person("kalyan", "pidugu", "javascript")
console.log(student4)

Object.seal(student3)
student3["add"] = 4;
console.log(student3)

const person1 = {
    reading : false,
    read: function(isReading){
        this.read = this.reading
    },
}

const person2 = {
    reading : false,
    read(isReading){
        this.read = this.reading
    },
}
person2.reading = function(){
    
}
person2.read(true)
console.log(person2)

person1.read(true)
console.log(person1)
