//Canvas Creation
let choice = [2,2,2,3,4,4,4,4,5,5];
let number = 0;
let gap = 0;
let dfc = 0;
let radius1 = 0;
let radius2 = 0;
const tau = Math.PI*2;
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
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
function buttonmask(NoOfHoles, distFromCenter,sizeOfHole,sizeOfHole2) {
    let w = buttongraphics.width;
    let h = buttongraphics.height;
    let a = Math.random()*tau;
    let x = Math.sqrt(distFromCenter*distFromCenter*2)/2;
    let norh = 0;
    if(NoOfHoles > 4 && radius2>0){
        norh = a > 3.6 ? 0 : NoOfHoles - 4;
    }
    let r = tau/(NoOfHoles-norh);
    btnctx.translate(w/2,h/2);
    btnctx.beginPath();
    btnctx.rect(-w/2,-h/2,w,h);
    btnctx.rotate(a);
    for (var i = 0; i < NoOfHoles-norh; i++){
        btnctx.moveTo(0,0);
        btnctx.arc(x,x,sizeOfHole,0,tau,true);
        btnctx.rotate(r);
    }
    if(norh!=0 ){
        btnctx.moveTo(0,0);
        btnctx.arc(0,0,sizeOfHole2,0,tau,true);
    }
    btnctx.clip();
    btnctx.setTransform(1, 0, 0, 1, 0, 0);
}
function initButton(){
    number = choice[Math.floor(Math.random()*choice.length)];
    gap = Math.floor(Math.random()*5)+5;
    let temp = Math.min(gap)
    radius1 = Math.floor(Math.random()*4)+2;
    dfc = Math.floor(Math.random()*(buttongraphics.width/2-gap-radius1*2))+radius1*2;
    radius2 = Math.floor(Math.random()*(dfc-radius1-5))+2;
    buttonmask(number,dfc,radius1,radius2);
    console.log("gap: "+gap+" dfc: "+dfc+" radius: "+radius1+" radius2: "+radius2, buttongraphics.width/2);
    console.log(choice.length, number);
}
initButton();
color = "rgba("+buttonR+","+buttonG+","+buttonB+",1)";
btnctx.fillStyle = color;
btnctx.fillRect(0,0,buttongraphics.width,buttongraphics.height);
btnctx.fillStyle = "rgba(255,255,255,0.3)";
btnctx.translate(buttongraphics.width/2,buttongraphics.height/2);
//btnctx.fillRect(-10,-10,20,20);
btnctx.beginPath();
btnctx.arc(0,0,buttongraphics.width/2-gap,0,tau);
btnctx.fill();

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









/////////////////////////////////////////////////////////
ctx.translate(canvas.width/2, canvas.height/2);
ctx.beginPath();
ctx.rect(-50,-50,100,100);
t=6;
for (var i=0; i<t; i++) {
    ctx.moveTo(0,0);
    ctx.rotate(tau/t);
    ctx.arc(10,10,5,0,tau,true);
}
ctx.clip();
ctx.fillStyle = color;
ctx.fillRect(-canvas.width/2, -canvas.height/2,canvas.width, canvas.height);
