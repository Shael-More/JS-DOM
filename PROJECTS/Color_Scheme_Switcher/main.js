const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "red"
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "black"
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "white"
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
            body.style.color = "green"
        }
    })
})

