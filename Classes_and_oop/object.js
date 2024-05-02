function multiplyBy5(num) {
    return num * 5;
}

// multiplyBy5.power = 2
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


function createUser(username, price) {
    this.username = username
    this.price = price
}
createUser.prototype.increment = function() {
    this.price++
}

createUser.prototype.printMe = function() {
    console.log(`Price is ${this.price}`);
}

const chai = new createUser("chai",25)

// means new object is created
/*
    const chai = {
        username : "chai",
        price : 25
    }
*/
const tea = new createUser("chai",250)

chai.printMe()

console.log( )


/*
    Here's what happens behind the scene when the new keyword is used:

    - A new object is created: The new keyword initiates the creation of a new Javascript object.

    - A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
      This means that it has access to properties and methods defined on the constructor's prototype.

    - The constructor is called: The constructor function is called with the specified arguments and this is bound to
      the newly created object. If no explicit return value is specified from the the constructor. Javascript assumes this,
      the newly created object, to be tge intended return value
      
    - The new object is returned: After the constructor function has been called, if it doesnt return a non primitive value
     (object, array, function, etc.), the newly created object is returned. 

      
*/