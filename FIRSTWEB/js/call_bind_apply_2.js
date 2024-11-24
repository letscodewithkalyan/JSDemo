const myName ={
    firstName: "Kalyan",
    lastName: "Pidugu"
}

function printFullName(state, district) {
    console.log(`FirstName:${this.firstName}, lastName:${this.lastName}
        state:${state} district:${district}`)
}

let bindMethod = printFullName.bind(myName, "AP")
bindMethod("Anantapur")

Function.prototype.myBind = function(...args){
    let obj = this;
    var remainingParms = args.slice(1)
    return function(...args2){
        obj.apply(args[0],[...remainingParms, ...args2])
    }
}

let mybindMethod = printFullName.myBind(myName, "AP")
mybindMethod("Anantapur")