var r = document.querySelector(":root");
const iconNames = ["default", "brush", "pen", "bucket", "eraser"];
// change cursor according to button
function changeCursor(event) {
  const icon = event.target.dataset.name;
  if(icon === "default" || !iconNames.includes(icon)) {
    document.body.style.cursor = `url(), auto`;
    r.style.setProperty("--cursoricon", `url(), auto`);
    return
  }
  if(iconNames.includes(icon)) {
   
      document.body.style.cursor = `url(./assets/${icon}.png), auto`;
      r.style.setProperty("--cursoricon", `url(./assets/${icon}.png), auto`);
  }
}

// do functions that are onclick only
function utility(event) {
  console.log(event);
}

//  canvas functionality
 const canvas = document.querySelector('canvas')
 const ctx = canvas.getContext("2d")
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







// download function

const downloadDrawing=()=>{
  let link = document.querySelector("#downloadlink")
  link.href = canvas.toDataURL()
  link.click()
}
document.getElementById("downloadButton").addEventListener('click',downloadDrawing)