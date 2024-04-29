const body = document.querySelector("body")

const colorGen = function() {
    const randomColor = Math.round(Math.random() * 999999 + 1)
    console.log(randomColor)
    body.style.backgroundColor = `#${randomColor}`
}

document.querySelector("#start").addEventListener("click", function() {
    console.log("clicked");
    const interval = setInterval(colorGen, 1000)
    
    document.querySelector("#stop").addEventListener("click", function() {
        console.log("stopped");
        clearInterval(interval)
    })
})
