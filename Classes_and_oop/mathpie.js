const desc = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(desc)


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log(`chai nahi bani`);
    }
}


Object.defineProperty(chai, 'name', {
    // writable: true,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))


for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}