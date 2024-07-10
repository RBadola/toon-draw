var r = document.querySelector(":root");
const iconNames = ["default", "brush", "pen", "bucket", "eraser"];
let tool = "default";
// change cursor according to button
// function changeCursor(event) {
//   const icon = event.target.dataset.name;
//   if(icon === "default" || !iconNames.includes(icon)) {
//     document.body.style.cursor = `url(), auto`;
//     r.style.setProperty("--cursoricon", `url(), auto`);
//     return
//   }
//   if(iconNames.includes(icon)) {
//       tool=icon
//       document.body.style.cursor = `url(./assets/${icon}.png), auto`;
//       r.style.setProperty("--cursoricon", `url(./assets/${icon}.png), auto`);
//   }
// }

// do functions that are onclick only
function utility(event) {
  let btn = event.target.dataset.name;
  switch (btn) {
    case "redo":
      break;
    case "undo":
      break;
    case "bin":
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillRect(0, 0, canvas.width, canvas.height);
      break;
    case "download":
      downloadDrawing();

      break;
    default:
      break;
  }
}

//  canvas functionality

//  console.log(canvas.width,canvas.height);

//   rectangle filled with color
// ctx.fillRect(10,10,100,100)
// change style
// ctx.lineWidth = 1
// ctx.strokeStyle = "red";
// // rectangle with outline
// ctx.strokeRect(10,10,100,100)

// drawing line

//  initiate the line
// ctx.beginPath()
// //  set sgtarting point
// ctx.moveTo(10,10)
// // set line direction
// ctx.lineTo(100,10)
// ctx.lineTo(100,150)
// // close the line
// ctx.closePath()
// // make line visible
// ctx.stroke()

//  painting

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let drawing = false;
let scr = 225;

const canvasOffsetX = canvas.offsetLeft - 235;
let canvasOffsetY = canvas.offsetTop - 325;
canvas.width = window.innerWidth - window.innerWidth / 2;
canvas.height = 600;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Functions to handle drawing
function startDrawing(event) {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(event.clientX - canvasOffsetX, event.clientY - canvasOffsetY);
}

function stopDrawing() {
  drawing = false;
  ctx.beginPath(); // Reset the context state
}

function draw(event) {
  if (!drawing) return;

  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000";
  ctx.lineJoin = "round";

  ctx.lineTo(event.clientX - canvasOffsetX, event.clientY - canvasOffsetY);
  ctx.stroke();
}

// Event listeners for drawing
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing); // Stop drawing when mouse leaves the canvas
canvas.addEventListener("mousemove", draw);

// download function

const downloadDrawing = () => {
  console.log("clicked");
  let link = document.querySelector("#downloadlink");
  link.href = canvas.toDataURL();
  link.click();
};
