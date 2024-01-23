//Canvas Creation
let choice = [2,2,2,3,4,4,4,4,5,5];
let number = 0;
let gap = 0;
let dfc = 0;
let radius1 = 0;
let radius2 = 0;

const tau = Math.PI*2;
const canvas = document.createElement('canvas');
const style = document.createElement('style');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
document.body.appendChild(style);

// Function to update canvas size
function pageResized() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

//Setting the size of the canvas for the first time
pageResized();

//Page resized
//window.onresize = pageResized;

//Make Canvas Background COlour to black
canvas.style.backgroundColor = "Black"; // Set the background color to black
//Remove the default Margin of the body
document.body.style.margin = 0; // Remove the margin around the canvas
//remove the scroll
document.body.style.overflow = "hidden"; // Make the canvas unscrollable

// make a button with a drop down menu
let buttonH = Math.floor(Math.random()*360);
let buttonS = Math.floor(Math.random()*100);
let buttonL = Math.floor(Math.random()*70)+30;
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
let buttonsize = buttongraphics.width/2-4;
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
    radius1 = Math.floor(Math.random()*4)+2;
    dfc = Math.floor(Math.random()*(buttonsize-gap-radius1*2))+radius1*2;
    radius2 = Math.floor(Math.random()*(dfc-radius1-5))+2;
    buttonmask(number,dfc,radius1,radius2);
    console.log("gap: "+gap+" dfc: "+dfc+" radius: "+radius1+" radius2: "+radius2, buttongraphics.width/2);
    console.log(choice.length, number);
}
initButton();
color = "hsla("+buttonH+","+buttonS+"%,"+buttonL+"%,1)";
btnctx.fillStyle = color;
btnctx.translate(buttongraphics.width/2,buttongraphics.height/2);
btnctx.beginPath();
btnctx.shadowColor = "hsla("+buttonH+","+buttonS+"%,"+(buttonL-29)+"%,1)";
btnctx.shadowOffsetX = 3;
btnctx.shadowOffsetY = 3;
btnctx.moveTo(0,0);
btnctx.arc(0,0,buttonsize,0,tau);
btnctx.fill();

btnctx.shadowOffsetX = -2;
btnctx.shadowOffsetY = -2;
//btnctx.shadowBlur = 2;
btnctx.fillStyle = "rgba(255,255,255,0.4)";
btnctx.moveTo(0,0);
btnctx.beginPath();
btnctx.arc(1,1,buttonsize-gap,0,tau);
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
dropDown.style.width = "20vw";
dropDown.style.minWidth = "200px";

dropDownul.style.listStyleType = "none";
dropDownul.style.padding = 0;
dropDownul.style.margin = 0;
dropDownul.style.display="grid";
dropDownul.style.gridTemplateRows="1fr";
dropDownul.style.gridAutoRows="2fr";

//controls.onclick = function() {dropDown.style.display = dropDown.style.display === 'none'?'block':'none';};
controls.onclick = function() {
    controls.style.transition = "top 1s cubic-bezier(.44,0,.83,.12) 0s";
    controls.style.top = "110vh"; // Change the value to the desired position
    dropDown.style.display = dropDown.style.display === 'none'?'block':'none';
    controls.addEventListener("transitionend", function() {
        controls.style.display = "none";
      });
    };

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
canvas.onclick = function() {
    // Unhide the button
    controls.style.display = 'block';
    controls.style.top = "10px";
};


class Slider{
    constructor(name, parent =document.body ,color = "grey", index=0, min=0, max=100, defaultValue=50) {
        this.index = index;
        this.name = name;
        this.min = min;
        this.max = max;
        this.defaultValue = defaultValue;
        this.color = color;
        this.parent = parent;
    }
    init(){
        this.outerbox = document.createElement("div");
        this.sliderbox = document.createElement("div");
        this.valuebox = document.createElement("div");
        this.namebox = document.createElement("div");
        this.namebox.innerHTML = this.name;
        this.inputslider = document.createElement("input");
        this.inputslider.type = "range";
        this.inputslider.min = this.min;
        this.inputslider.max = this.max;
        this.inputslider.value = this.defaultValue;
        this.inputvalue = document.createElement("input");
        this.inputvalue.pattern = "[^a-zA-Z]+";
        //this.inputvalue.type = "number";
        this.displayvalue = document.createElement("span");
        this.displayvalue.innerHTML = this.inputslider.value;
        this.outerbox.appendChild(this.sliderbox);
        this.outerbox.appendChild(this.valuebox);
        this.outerbox.appendChild(this.namebox);
        this.sliderbox.appendChild(this.inputslider);
        this.valuebox.appendChild(this.inputvalue);
        this.valuebox.appendChild(this.displayvalue);
        this.parent.appendChild(this.outerbox);
        
        this.outerbox.className = "outbox";
        this.sliderbox.className = "sldbox";
        this.valuebox.className = "valbox";
        this.namebox.className = "nambox";

        
        this.outerbox.style.display = "grid";
        this.outerbox.style.gridTemplateColumns = "repeat(4, 1fr)";
        this.outerbox.style.gridTemplateRows = "30px 30px";
        this.outerbox.style.background = this.color;
        this.outerbox.style.paddingTop = "6px";
        this.sliderbox.style.gridArea = "2/1/3/5";
        this.sliderbox.style.padding = "0px 5px";
        this.valuebox.style.gridArea = "1/4/2/5";
        this.valuebox.style.textAlign = "center";
        this.valuebox.style.cursor = "text";
        this.valuebox.style.fontFamily = "Helvetica";
        this.valuebox.style.border = "none";
        this.valuebox.style.marginRight = "16px";
        this.valuebox.style.marginBottom = "3px";
        this.displayvalue.style.background = "white";
        this.displayvalue.style.width = "100%";
        this.displayvalue.style.height = "100%";
        this.displayvalue.style.display = "block";
        this.displayvalue.style.lineHeight = "28px";
        this.displayvalue.style.borderRadius = "20px";
        this.displayvalue.style.border = "1px solid rgb(255,255,255)";
        this.inputvalue.style.border = "none";
        this.inputvalue.style.borderBottom = "2px solid grey";
        this.inputslider.style.width = "100%";
        this.inputvalue.style.textAlign = "center";
        this.inputvalue.style.padding = "0px";
        this.inputvalue.style.borderRadius = "20px";
        this.inputvalue.style.outline = "none";
        this.inputvalue.style.fontFamily = "Helvetica";
        this.inputvalue.style.width =  "100%";
        this.inputvalue.style.height =  "100%";
        this.inputvalue.style.display = "none";
        this.namebox.style.gridArea = "1/1/2/4";
        this.namebox.style.paddingLeft = '10px';
        this.namebox.style.lineHeight = "30px";
        style.innerHTML += "::selection {background-color: red; color: white;}";
      

        this.displayvalue.addEventListener("mouseover", ()=>this.overvalue(this.displayvalue));
        this.displayvalue.addEventListener("mouseout", ()=>this.outvalue(this.displayvalue));
        this.displayvalue.addEventListener("click", ()=>this.clickvalue(this.displayvalue, this.inputvalue, this.inputslider.value));
        this.inputvalue.addEventListener("focusout", ()=>this.valuentered(this.inputvalue, this.displayvalue,this.inputslider));
        this.inputslider.addEventListener("input", ()=>this.valuechanged(this.displayvalue,this.inputslider));
    }
    overvalue(a) {
        a.style.border = "1px solid rgb(20,20,20)";
        a.style.background ="rgb(220,220,220)";
    }
    outvalue(a){
        a.style.border = "1px solid rgb(255,255,255)";
        a.style.background = "white";
    }
    clickvalue(a,b, value){
        b.style.display = "block";
        a.style.display = "none";
        b.value = value;
        b.select();
    }
    valuentered(a,b,c){
        b.style.display = "block";
        a.style.display = "none";
        let value = parseFloat(a.value);
        console.log(b.value);
        if (!isNaN(value)) {
            c.value = value;
            this.valuechanged(b,c);
        }
    }
    valuechanged(a,b){
        a.innerHTML = b.value;
    }

}

style.innerHTML = "input[type='range']{-webkit-appearance: none; overflow:hidden; border-radius: 16px;}"+
"input[type='range']::-webkit-slider-runnable-track{"+
"height: 15px;"+
"background: black;"+
"border-radius: 16px;}"+
"input[type='range']::-webkit-slider-thumb {"+
"-webkit-appearance: none;"+
"appearence: none;"+
"height: 15px;"+
"width: 15px;"+
"background: pink;"+
"border-radius: 50%;"+
"border: 2px solid white;"+
"box-shadow: -407px 0 0 400px #f50;"+
"}"
;

style.innerHTML += "input[type='range']::-moz-range-track{"+
"height: 15px;"+
"background: black;"+
"border-radius: 16px;}"+
"input[type='range']::-moz-range-thumb {"+
"-moz-appearance: none;"+
"appearence: none;"+
"height: 12px;"+
"width: 12px;"+
"background: pink;"+
"border-radius: 50%;"+
"border: 2px solid white;"+
"box-shadow: -407px 0 0 400px #f50;"+
"}";

a = new Slider("TEST", dropDownul);
a.init();
b = new Slider("TEST 2", dropDownul,"cyan", 1, -100, 200, 45);
b.init();
