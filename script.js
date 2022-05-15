const btn = document.getElementById("btn");
const shapes = ["quad-circle-1", "quad-circle-2", "quad-circle-3", "quad-circle-4", "triange-1", "triange-2", "triange-3", "triange-4", "circle"];
const colors = ["#01d2fd", "#ffc700", "#fe9f12", "#06d0c7"];
const boxes = document.querySelectorAll(".container div");

let generatePattern = () => {
    boxes.forEach((box) => {
        box.className = "";
        let i = Math.floor(Math.random() * shapes.length);
        let j = Math.floor(Math.random() * colors.length);
        box.classList.add(shapes[i]);
        box.style.backgroundColor = colors[j];
    });
};

btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);