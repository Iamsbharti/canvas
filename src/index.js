import "./styles.css";
const canvas = document.querySelector("#draw");

//get 2d context of canvas
const ctx = canvas.getContext("2d");

//width according to the window
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;

ctx.strokeStyle = "#ASDE55";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return; //stop func from running when mouse is down
  console.log(e);
}

//add event listeners
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
