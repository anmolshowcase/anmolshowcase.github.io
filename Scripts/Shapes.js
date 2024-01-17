//Canvas Creation
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// Function to update canvas size
function pageResized() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

//Setting the size of the canvas for the first time
pageResized();

//Page resized
window.onresize = pageResized;

//Make Canvas Background COlour to black
canvas.style.backgroundColor = "Black"; // Set the background color to black
//Remove the default Margin of the body
document.body.style.margin = 0; // Remove the margin around the canvas
//remove the scroll
document.body.style.overflow = "hidden"; // Make the canvas unscrollable

// make a button with a drop down menu
let buttonR = Math.floor(Math.random()*225);
let buttonG = Math.floor(Math.random()*225);
let buttonB = Math.floor(Math.random()*225);
const controls = document.createElement("button");
document.body.appendChild(controls);
controls.style.position = "absolute";
controls.style.right = "10px";
controls.style.top = "10px";
controls.style.backgroundColor = "rgba(0,0,0,0)";
controls.style.border = "none";
controls.style.cursor = "pointer";
controls.style.borderRadius = "50%"
controls.style.width = "70px";
controls.style.height = "70px";
controls.style.padding = "0px";
controls.style.overflow = "hidden";
buttongraphics = document.createElement("canvas");
controls.appendChild(buttongraphics);
btnctx = buttongraphics.getContext("2d");
buttongraphics.width = 70;
buttongraphics.height = 70;

//Button Hole masks
function buttonmask() {}
btnctx.beginPath();
btnctx.rect(0,0,buttongraphics.width,buttongraphics.height);
btnctx.arc(buttongraphics.width/2+10,buttongraphics.height/2+10,buttongraphics.width/12,0,Math.PI*2,true);
btnctx.moveTo(buttongraphics.width/2-10,buttongraphics.height/2-10);
btnctx.arc(buttongraphics.width/2-10,buttongraphics.height/2-10,buttongraphics.width/12,0,Math.PI*2,true);
btnctx.moveTo(buttongraphics.width/2+10,buttongraphics.height/2-10);
btnctx.arc(buttongraphics.width/2+10,buttongraphics.height/2-10,buttongraphics.width/12,0,Math.PI*2,true);
btnctx.moveTo(buttongraphics.width/2-10,buttongraphics.height/2+10);
btnctx.arc(buttongraphics.width/2-10,buttongraphics.height/2+10,buttongraphics.width/12,0,Math.PI*2,true);
btnctx.clip();


btnctx.fillStyle = "rgba("+buttonR+","+buttonG+","+buttonB+",1)";
btnctx.fillRect(0,0,buttongraphics.width,buttongraphics.height);


const dropDown = document.createElement("div");
const dropDownul = document.createElement("ul");
document.body.appendChild(dropDown);
dropDown.appendChild(dropDownul);

dropDown.style.position = "absolute";
dropDown.style.right = "10px";
dropDown.style.top = "30px";
dropDown.style.backgroundColor = "rgba(255,255,255,0.2)";
dropDown.style.color = "rgba(255,0,0,1)";
dropDown.style.display = "none";

dropDownul.style.listStyleType = "none";
dropDownul.style.padding = 0;
dropDownul.style.margin = 0;

controls.onclick = function() {dropDown.style.display = dropDown.style.display === 'none'?'block':'none';};

const dropDownli = document.createElement("li");
dropDownli.innerHTML = "testing with some extra long strings";

dropDownul.appendChild(dropDownli);

dropDownli.style.padding = "5px";
dropDownli.onmouseover = function() {dropDown.style.backgroundColor = "rgba(100,100,100,1)";};
dropDownli.onmouseout = function() {dropDown.style.backgroundColor = "rgba("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+",1)";};