// ASSIGN VARIABLES
var controls = [];
var label = [];
var canvasl = [];
var ctxl = [];
var cs = 100;
var bgcolor = "#ffaab5"
var ccolor = "#fff4aa"

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
    cs = sh;
    
    cntrls.style.Top ="0px";
    cntrls.style.left = sh+"px";
    controlw = sw-sh-4;
    
}else{
    cs = sw;
    
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

function crtcnvs(index, d=2) {
  canvasl[index]=document.createElement("canvas");
  if (d!=3) {
      ctxl[index]=canvasl[index].getContext("2d");
  }else {
      ctxl[index]=canvasl[index].getContext("2d");
  }
  canvasl[index].width = cs;
  canvasl[index].height = cs;
  canvasl[index].style.position="absolute";
  canvasl[index].style.left = "0px";
  canvasl[index].style.top = "0px";
  document.body.appendChild(canvasl[index]);
  return index;
}
//////////////////////////////////////////////




//INITIALIZE CANVAS AND CONTROLS
bg = crtcnvs(0);
ctxl[bg].fillStyle = bgcolor; 
ctxl[bg].fillRect(0, 0,cs,cs);


circle = crtcnvs(1);
ctxl[circle].fillStyle = "#fff4aa";
ctxl[circle].beginPath(); 
//Angle = controls[anglec].value*Math.PI/180;
ctxl[circle].arc(cs/2, cs/2,20,0,7); 
ctxl[circle].fill();


anglec = crtcntrl(0,"Angle",360, 0,360,0.1);
controls[anglec].addEventListener("input", changecircle);


radiusc = crtcntrl(1,"Radius",20,0,cs/2,0.1);
controls[radiusc].addEventListener("input", changecircle);


fillc = document.createElement("input");
fillc.setAttribute("type","radio");
fillc.setAttribute("name","shape");
fillc.setAttribute("value","fill")
fillc.setAttribute("id","fill");
fillc.style.marginTop = "10px";
fillc.style.marginLeft= "50px";
filllabel = document.createElement("label");
filllabel.setAttribute("for","fill")
filllabel.innerHTML = "Fill   ";


cntrls.appendChild(fillc);
cntrls.appendChild(filllabel);

piec = document.createElement("input");
piec.setAttribute("type","radio");
piec.setAttribute("name","shape");
piec.setAttribute("value","pie")
piec.setAttribute("id","pie")


pielabel = document.createElement("label");
pielabel.setAttribute("for","pie")
pielabel.innerHTML = "Pie   ";


cntrls.appendChild(piec);
cntrls.appendChild(pielabel);


outc = document.createElement("input");
outc.setAttribute("type","radio");
outc.setAttribute("name","shape");
outc.setAttribute("value","out")
outc.setAttribute("id","out")

outlabel = document.createElement("label");
outlabel.setAttribute("for","out")
outlabel.innerHTML = "Outline";


cntrls.appendChild(outc);
cntrls.appendChild(outlabel);

document.getElementById("fill").checked = true;
fillc.addEventListener("change",changecircle);
piec.addEventListener("change",changecircle);
outc.addEventListener("change",changecircle);

Bgc = document.createElement("input");
Ccc = document.createElement("input");
Bgc.setAttribute("type","color");
Ccc.setAttribute("type","color");
//Bgc.style.display = "block";
Bgc.style.marginRight= "50px";
Ccc.style.cssFloat = "right";
Bgc.style.cssFloat = "right";
Ccc.value = ccolor;
Bgc.value = bgcolor;
cntrls.appendChild(Bgc);
cntrls.appendChild(Ccc);

Bgc.addEventListener("input",changecolor);
Ccc.addEventListener("change",changecolor);


function changecircle(){
    var selection = document.querySelector('input[name="shape"]:checked').value;
    ctxl[circle].clearRect(0,0,cs, cs);
    ctxl[circle].strokeStyle=ccolor;
    ctxl[circle].lineWidth = 5;
    ctxl[circle].fillStyle = ccolor;
    ctxl[circle].beginPath(); 
    Angle = controls[anglec].value*Math.PI/180;
    ctxl[circle].arc(cs/2, cs/2,controls[radiusc]. value,0,Angle);
    if (selection == "out") {
        ctxl[circle].stroke();
    }
    else {
        ctxl[circle].fill();
    }
    
    ctxl[circle].closePath();
    
    if (selection == "pie") {
        if (controls[anglec].value>180) {
            ctxl[circle].fillStyle = bgcolor;
        }
        else{
            ctxl[circle].fillStyle = ccolor;
        }
        A = Math.ceil(controls[radiusc].value);
        Y = Math. round(Math.sin(Angle)*controls[radiusc].value) ;
        X = Math. round(Math.cos(Angle)*controls[radiusc].value);
        ctxl[circle].beginPath();
        ctxl[circle].moveTo((cs/2)+A, cs/2);
        ctxl[circle].lineTo(cs/2,cs/2);
        ctxl[circle].lineTo(cs/2+X,cs/2+Y);
        ctxl[circle].lineTo((cs/2)+A, cs/2);
        ctxl[circle].fill();
        ctxl[circle].closePath();
    }
    
    
}

function changecolor() {
    bgcolor = Bgc.value;
    ccolor = Ccc.value;
    changecircle();
    ctxl[bg].fillStyle = bgcolor;
    ctxl[bg].fillRect(0, 0,cs,cs);
}



