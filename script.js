let body = document.querySelector("body");
let container = document.createElement("div");
container.className = "container";
let intialize = document.querySelector("#initialize");

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

intialize.addEventListener("click",gridSize)
body.appendChild(container);