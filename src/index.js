import "./styles.css";
const canvas = document.querySelector("#draw");

//get 2d context of canvas
const ctx = canvas.getContext("2d");

//width according to the window
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;

ctx.strokeStyle = "Green";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 15;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
function draw(e) {
  if (!isDrawing) return; //stop func from running when mouse is down
  //console.log(e);
  //draw
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //end to
  ctx.lineTo(e.offsetX, e.offsetY);
  //what to draw
  ctx.stroke();
  //update lastx and lasty value
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
}

//add event listeners
//update mousedown event callback func to set lastx,y value to
// the current one to avoid drawing from the last coordinate
canvas.addEventListener("mousedown", event => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
