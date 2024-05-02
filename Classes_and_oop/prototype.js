// let myName = "Shailesh  "

// console.log(myName.truelength());


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spider power is ${this.spiderman}`)
    }
}

//inheritance

// const User = {
//     name : "Chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable : false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User // Teacher can access all the properties of user

// // Modern Syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "ChaiAurCode     "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}


anotherUserName.trueLength()
"hitesh".trueLength()
"IceTea".trueLength()