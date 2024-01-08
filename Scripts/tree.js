// ASSIGN VARIABLES
var controls = [];
var label = [];
var canvasl = [];
var ctxl = [];
var CanvasSize = 100;


// SCREEN SIZE
sw = window.innerWidth;
sh = window.innerHeight;




//CREATE ELMENTS

var controlw= sw-4;

canvas = document.createElement("canvas");

cntrls = document.createElement("div");



//APPEND ELEMENTS


document.body.appendChild(cntrls);




//POSITIONING



document.body.style.margin="0px";
cntrls.style.position="absolute";


//LAYOUT ORIENTATION
if (sw>sh) {
    CanvasSize = sh;
    
    cntrls.style.Top ="0px";
    cntrls.style.left = sh+"px";
    controlw = sw-sh-4;
    
}else{
    CanvasSize = sw;
    
    cntrls.style.top = sw+"px";
}





//CREATE CONTROLS
function crtcntrl(index = 0, name = "",defaultv = 0, min=0, max=100, step=1) {
  controls[index] = document.createElement("INPUT");
  controls[index].setAttribute("type", "range");
  controls[index].style.width= controlw+"px";
  controls[index].setAttribute("min", min);
  controls[index].setAttribute("max", max);
  controls[index].setAttribute("step", step);
  controls[index].value = defaultv;
  label[index]=document.createElement("p");
  label[index].innerHTML = name+" = "+controls[index].value;
  
  label[index].style.marginBottom="0px";
  label[index].style.marginTop="10px";
  label[index].style.marginLeft="10px"
  
  
  cntrls.appendChild(label[index]);
  cntrls.appendChild(controls[index]);
  
  controls[index].addEventListener("input", function (){label[index].innerHTML = name+" = "+this.value})
  return index;
}

//CREATE CANVAS

function crtcnvs(index, context = "2d",fullScreen = false, width = CanvasSize, height = CanvasSize) {
    /// Create a new canvas layer with the specified index starting at 0, type "2d" or "webgl", fullscreen or not , manual canvas hieght , manual canvas hieght///
  canvasl[index]=document.createElement("canvas");
  if (context!="webgl") {
    ctxl[index]=canvasl[index].getContext("2d");
  }else {
    ctxl[index]=canvasl[index].getContext('webgl2') || canvasl[index].getContext('experimental-webgl2');
  }
  if (fullScreen == true) {
    canvasl[index].width = sw;
    canvasl[index].height = sh;
  }
  else{
    canvasl[index].width = width;
    canvasl[index].height = height;
  }
  canvasl[index].style.position="absolute";
  canvasl[index].style.left = "0px";
  canvasl[index].style.top = "0px";
  document.body.appendChild(canvasl[index]);
  return index;
}
//////////////////////////////////////////////




//INITIALIZE CANVAS AND CONTROLS


let backgroundColor = "rgba(255,0,255)";
let lineColor = "rgba(0,0,0,1)";
let Thickness = 5;
let itteration = 5;
let branches = 1;
let branching = 2;


let branchAngle = 10;











const background = crtcnvs(0,"2d");
const tree = crtcnvs(1,"2d");
ctxl[background].fillStyle = backgroundColor;
ctxl[background].fillRect(0,0,CanvasSize,CanvasSize);

function redraw(){
    branchAngle = controls[anglec].value;
    let positionl = [CanvasSize/2, CanvasSize/2];
    let positionr = [CanvasSize/2, CanvasSize/2];
    ctxl[tree].clearRect(0, 0, CanvasSize, CanvasSize);
    ctxl[tree].strokeStyle = lineColor;
    ctxl[tree].lineWidth = Thickness;
    ctxl[tree].beginPath();
    for(let i = 1; i<= itteration; i++) {
        for(let j=1; j<=i; j++){
            positionl = drawline(branchAngle, 60,positionl[0],positionl[1]);
            positionr = drawline(branchAngle*-1, 60,positionr[0],positionr[1]);
            branchAngle += branchAngle;
        }
    }
    ctxl[tree].stroke();
}
function drawline(angle , length, sx ,sy){
    r = angle * Math.PI/180;
    let x = sx-(Math.sin(r)*length);
    let y = sy-(Math.cos(r)*length);
    ctxl[tree].moveTo(sx,sy);
    ctxl[tree].lineTo(x,y);
    pos = [x,y];
    return pos;
}



anglec =  crtcntrl(0,"Angle",2,-360,360,1);
controls[anglec].addEventListener("input", redraw);