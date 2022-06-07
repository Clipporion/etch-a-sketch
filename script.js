let body = document.querySelector("body");
let container = document.createElement("div");
container.className = "container";
let intialize = document.querySelector("#initialize");
let rainbow = document.querySelector("#rainbow");
let black = document.querySelector("#black");

for (let i = 1; i<= (16); i++) {
    let line = document.createElement("div");
    line.className = ("line");
        for (let j = 1; j <= 16; j++){
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.addEventListener("mouseover", function() {pixel.style.backgroundColor = "black";})
        line.appendChild(pixel);
        }
    container.appendChild(line);
}

function askForSize() {
    return prompt("Grid size?");
}

function gridSize() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    let input = askForSize();

    if (+input > 0 && +input <= 100){
        for (let i = 1; i<= (input); i++) {
            let line = document.createElement("div");
            line.className = ("line");
                for (let j = 1; j <= input; j++){
                let pixel = document.createElement("div");
                pixel.className = "pixel";
                pixel.addEventListener("mouseover", function() {pixel.style.backgroundColor = "black";})
                line.appendChild(pixel);
                }
            container.appendChild(line);
        }
    } else {
        gridSize()}
    }

function changeColor(button) {
    let buttonSelect = button.target.id.toLowerCase();
    let pixels = document.querySelectorAll("div.pixel");
    
    if (buttonSelect == "rainbow") {
        pixels.forEach(function(pix) {pix.addEventListener("mouseover", function() {
            let rngA = Math.floor(Math.random()*255);
            let rngB = Math.floor(Math.random()*255);
            let rngC = Math.floor(Math.random()*255);            
            pix.style.backgroundColor =`rgb(${rngA},${rngB},${rngC})`})});
    } else if (buttonSelect == "black") {
        pixels.forEach(function(pix) {pix.addEventListener("mouseover", function() {pix.style.backgroundColor =`black`})});
    }
}

rainbow.addEventListener("click", changeColor)
black.addEventListener("click", changeColor)
intialize.addEventListener("click",gridSize)
body.appendChild(container);