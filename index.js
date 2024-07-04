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
