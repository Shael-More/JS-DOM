// Object Literal
// const user = {
//     username : "Hitesh",
//     logginCount: 8,
//     signeedIn : true,

//     getUserDetails : function() {
//         console.log("Got user details from DB")
//     }
// }

function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`)
    }
    return this;

}

const userOne = new user("Hit", 8, true)
const userTwo = new user("chai", 12, true)
console.log(userOne.constructor)
// console.log(userTwo)


