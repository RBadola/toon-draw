var r = document.querySelector(':root');
const iconNames =[
    "default",
    "brush",
    "pen",
    "bin",
    "colors",
    "bucket",
    "download",
    "eraser",
    "redo",
    "undo",
    "share"
]
// change cursor according to button
function changeCursor(event){
const icon =event.target.dataset.name
if( iconNames.includes(icon) ){
console.log(true);
myFunction_set(icon)
document.body.style.cursor = `url(./assets/${icon}.png), auto`;
}
}

//  set cursor image
function myFunction_set(icon) {
r.style.setProperty('--cursoricon',`url(./assets/${icon}.png), auto`);
}

// do functions that are onclick only
function utility(event){
    console.log(event);
}