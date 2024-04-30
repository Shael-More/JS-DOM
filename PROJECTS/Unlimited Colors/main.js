const colorGen = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId;

const startChanginhColor = function() {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = colorGen()
    }
}
const stopChanginhColor = function() {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector("#start").addEventListener("click", startChanginhColor)
document.querySelector("#stop").addEventListener("click", stopChanginhColor)


// another method

// const randomColor = Math.round(Math.random() * 999999 + 1)
// console.log(randomColor)
// body.style.backgroundColor = `#${randomColor}`
// document.querySelector("#start").addEventListener("click", function() {
//     const interval = setInterval(colorGen, 1000)
    
//     document.querySelector("#stop").addEventListener("click", function() {
//         console.log("stopped");
//         clearInterval(interval)
//     })
// })



