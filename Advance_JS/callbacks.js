// Callbacks and Callback Hell

// Main Function
const mainFunction = function(Callback) {
    setTimeout(function() {
        Callback([1,2,3,4,5])
    }, 2000)
}

// Add Function

const add = function(arr) {
    let sum = 0
    for(let i of arr) {
        sum += i
    }
    console.log(sum)
}

// Calling Main Function

mainFunction(add)