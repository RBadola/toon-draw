var r = document.querySelector(":root");
const iconNames = ["default", "brush", "pen", "bucket", "eraser"];
let tool ="default"
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
  console.log(event);
}

//  canvas functionality
 const canvas = document.querySelector('canvas')
 const ctx = canvas.getContext("2d")
 
 const canvasOffsetX = canvas.offsetLeft;
 const canvasOffsetY = canvas.offsetTop;
 canvas.width = window.innerWidth - canvasOffsetX;
 canvas.height = window.innerHeight - canvasOffsetY;
 console.log(canvas.width,canvas.height);
 
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


let painting = false

function startPainting(e){
  // if (tool === "brush"){
    painting = true
  
      startX = x;
      startY = y;
  // }
  console.log(painting,tool);
}
function draw(e){
  if(!painting) return

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#000';
  ctx.lineTo(e.clientX - canvasOffsetX, e.clientY)
  ctx.stroke();
}

function endPainting(){
  // if (tool === "brush"){
      painting = false
      ctx.stroke()
      ctx.beginPath()
  // }
  console.log(painting,tool);
}
canvas.addEventListener("mousedown",startPainting)
canvas.addEventListener("mouseup",endPainting)
canvas.addEventListener("mousemove",draw)


// download function

const downloadDrawing=()=>{
  let link = document.querySelector("#downloadlink")
  link.href = canvas.toDataURL()
  link.click()
}
document.getElementById("downloadButton").addEventListener('click',downloadDrawing)