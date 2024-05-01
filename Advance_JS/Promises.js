// Create Promises

// const promeiseOne = new Promise(function(resolve, reject) {
//     // DO an async task
//     // DB calss, cryptography, network

//     setTimeout(function() {
//         console.log("async task is completed")
//         resolve()
//     }, 1000)
// } )


// // consume promise
// promeiseOne.then(function(){
//     console.log("Promise Consumed");
// })


// Another way second promise

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})



// third promise

const promisethree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "chai", email: "chai@eample.com"})
    })
})

promisethree.then(function(user){
    console.log(user)
})


// fourth Promise

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "hitman", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 2000)
})


promisefour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Promise is either resolved or rejected")
})


// fivth promise

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "Javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 2000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log((response));
    } catch(err) {
        console.log(err)
    }
}
consumePromiseFive()


// async function getAllUser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
        
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUser()

// using then catch

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return  response.json()
})
.then((data) => console.log(data))
.catch((err) => console.log(err))