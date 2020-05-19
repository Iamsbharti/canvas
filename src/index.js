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
