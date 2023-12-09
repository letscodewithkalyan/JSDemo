// Call: Function borrorwing
// Where one object functions used with the other object properties by manipulating the this keyword and control the 
// in which function executed.
var person ={
    firstname: "Kalyan",
    secondName: "Pidugu",
    printName: function(city){
        console.log(this.firstname + " " + this.secondName + " " + city);
        console.log(firstname);
    }
}

var printNameWithUnderScore = function(city){
    console.log(this.firstname+"__"+this.secondName+"___"+city);
}

person.printName("Kadiri");
printNameWithUnderScore.call(person, "Kadiri");

var person2 = {
    firstname: "K",
    secondName: "P"
}

person.printName.call(person2,"Kadiri");
printNameWithUnderScore.call(person2, "kadiri");

person.printName.apply(person2,["Kadiri"]);
printNameWithUnderScore.apply(person2, ["kadiri"]);

var bindFunction = printNameWithUnderScore.bind(person2);
bindFunction("Kadiri");

// Call and Apply Similar. Difference in Apply method parameters passed in square brackets. But in call directly will pass.
