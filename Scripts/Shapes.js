//Canvas Creation
let choice = [2,2,2,3,4,4,4,4,5,5];
let number = 0;
let gap = 0;
let dfc = 0;
let radius1 = 0;
let radius2 = 0;
let Iorien = "h";
let Forien = "h";
let controlsTop = "";
let controlsBottom = "";
let controlsRight = "";
let controlsWidth = 0;
let dropdownBottom = "";
let dropdownWidth = 0;
let dropdownTop = "";
let dropdownRight = "";
let outerboxGridSize = 0;
let slideinAnim = '@keyframes slidein{ 0%{transform: translateX(400px);} 100%{transform: translateX(0);}}';
let slideupAnim = '@keyframes slideup{ 0%{transform: translateY(0);} 100%{transform: translateY(-1000px);}}';
let buttonfallingAnim = '@keyframes buttonfalling{ 0%{ top: 10px; } 100%{ top: 110vh;}}';


const tau = Math.PI*2;
const canvas = document.createElement('canvas');
const style = document.createElement('style');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
document.head.appendChild(style);
style.innerHTML += slideinAnim;
style.innerHTML += slideupAnim;
style.innerHTML += buttonfallingAnim;

// Function to update canvas size
function pageResized() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    Iorien = window.innerWidth<window.innerHeight ? "v":"h";
}

//Setting the size of the canvas for the first time
pageResized();


function Screenorientation(){
    Forien = window.innerWidth<window.innerHeight ? "v":"h";
    if(Forien!=Iorien){
        Iorien = Forien;
        console.log("change");
        change();
    }
    console.log(Iorien, Forien);
}

function change(){
    if(Iorien=="v"){
        controlsWidth = 70;
        controlsTop = "";
        controlsBottom = "100px";
        controlsRight = 42;
        dropdownWidth = "100vw";
        dropdownBottom = "0";
        dropdownRight = "0";
        dropdownTop = "";
        outerboxGridSize = 30;
        dropDown.style.width = dropdownWidth;
        dropDown.style.bottom = dropdownBottom;
        dropDown.style.right = dropdownRight;
        dropDown.style.top = dropdownTop;
        controls.style.top = controlsTop;
        controls.style.bottom = controlsBottom;
        console.log("here");
        controls.style.right = controlsRight+"%";
        controls.style.width = controlsWidth+"px";
        controls.style.height = controlsWidth+"px";
    }
    else{
        controlsWidth = 70;
        controlsTop = "10px";
        controlsBottom = "";
        controlsRight = "10px";
        dropdownWidth = "20vw";
        dropdownBottom = "";
        dropdownRight = "0";
        dropdownTop = "0";
        outerboxGridSize = 30;
        dropDown.style.width = dropdownWidth;
        dropDown.style.bottom = dropdownBottom;
        dropDown.style.right = dropdownRight;
        dropDown.style.top = dropdownTop;
        controls.style.top = controlsTop;
        controls.style.bottom = controlsBottom;
        controls.style.right = controlsRight;
        controls.style.width = controlsWidth+"px";
        controls.style.height = controlsWidth+"px";
    }
}


//Page resized
window.onresize = Screenorientation;

//Make Canvas Background COlour to black
canvas.style.backgroundColor = "Black"; // Set the background color to black
canvas.style.display = "inline";
canvas.style.position = "absolute";
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
controls.style.backgroundColor = "rgba(0,0,0,0)";
controls.style.border = "none";
controls.style.cursor = "pointer";
controls.style.borderRadius = "50%"
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

function drawbutton(){
    btnctx.clearRect(0, 0, buttongraphics.width, buttongraphics.height);
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
}
initButton();
drawbutton();



const menucontainer = document.createElement("div");
menucontainer.style.position = "relative";
menucontainer.style.overflow = "hidden";
menucontainer.style.width = "100vw";
menucontainer.style.height = "100vh";
menucontainer.style.pointerEvents = "none";
const dropDown = document.createElement("div");
const dropDownul = document.createElement("ul");
document.body.appendChild(menucontainer);
menucontainer.appendChild(dropDown);
dropDown.appendChild(dropDownul);

dropDown.style.position = "absolute";
dropDown.style.right = dropdownRight;
dropDown.style.top = dropdownTop;
dropDown.style.bottom = dropdownBottom;
dropDown.style.backgroundColor = "rgba(255,255,255,0.2)";
dropDown.style.color = "rgba(255,0,0,1)";
dropDown.style.display = "none";
dropDown.style.width = dropdownWidth;
dropDown.style.minWidth = "200px";
dropDown.style.pointerEvents = "all";

dropDownul.style.listStyleType = "none";
dropDownul.style.padding = 0;
dropDownul.style.margin = 0;
dropDownul.style.display="grid";
dropDownul.style.gridTemplateRows="1fr";
dropDownul.style.gridAutoRows="2fr";

//controls.onclick = function() {dropDown.style.display = dropDown.style.display === 'none'?'block':'none';};
controls.onclick = function() {
   
    dropDown.style.display= "block";
    dropDown.style.animation = "slidein 500ms cubic-bezier(.18,.89,.32,1.28) 0s 1 normal both";
    dropDown.addEventListener("animationend",(e=>{
        if(e.animationName === "slidein"){
            controls.style.animation = "buttonfalling 1s cubic-bezier(.55,.06,.68,.19) 0s 1 normal both";
        }
        
    }))
    controls.addEventListener("animationend", function() {
        controls.style.display = "none";
    });
};


const menuHeadBox = document.createElement("div");
dropDownul.appendChild(menuHeadBox);
menuHeadBox.style.display = "grid";
menuHeadBox.style.gridTemplateColumns = "8fr 1fr";


const hideMenuBox = document.createElement("div");
menuHeadBox.appendChild(hideMenuBox);
hideMenuBox.style.background = "blue";
hideMenuBox.innerHTML = "Hide";
hideMenuBox.style.gridArea ="1/2/-1/-1";
hideMenuBox.style.cursor = "pointer";
hideMenuBox.onclick = function() {
    // Unhide the button
    dropDown.style.animation = "slideup 1s cubic-bezier(.18,.89,.32,1.28) 0s 1 normal both";
    controls.style.display = 'block';
    controls.style.top = controlsTop;
    controls.style.bottom = controlsBottom;
    controls.style.right = controlsRight;
    controls.style.animation = "none";
    dropDown.addEventListener("animationend", (e)=>{
    
        if(e.animationName === "slideup"){
            dropDown.style.display = "none";

        }
        
    });
    
};





///////////////////////////////////////////////////////////////////////////////


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


/////////////////////////////////////////////////////////////////////////////////////////////

class Slider{
    constructor(name, parent =document.body ,colorH = 200,colorS = 30,colorL = 30, index=0, min=0, max=100, defaultValue=50) {
        this.index = index;
        this.name = name;
        this.min = min;
        this.max = max;
        this.colorH = colorH;
        this.colorS = colorS;
        this.colorL = colorL;
        this.defaultValue = defaultValue;
        this.color = "hsl(" + colorH + "," + colorS + "%," + colorL+"%)";
        this.namecolor = colorL<50?"white":"black";
        this.displaycolor = "hsl(" + colorH + "," + colorS + "%," + ((colorL+30)>100?(colorL-30):(colorL+30))+"%)";
        this.invertedlightcolor = "hsl("+(this.colorH+180)+" "+this.colorS+"%"+((this.colorL+30)>100?(this.colorL-30):(this.colorL+30))+"%)";
        this.parent = parent;
    }
    init(){
        this.sliderstyle();
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
        this.inputslider.className = "inputslider"+this.index+"sl";
        this.inputvalue.className = "inputvalue"+this.index+"sv";

        
        this.outerbox.style.display = "grid";
        this.outerbox.style.gridTemplateColumns = "repeat(4, 1fr)";
        this.outerbox.style.gridTemplateRows =  outerboxGridSize+"px "+outerboxGridSize+"px";
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
        this.displayvalue.style.background = this.displaycolor;
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
        this.valuebox.style.color = "black";
        this.namebox.style.gridArea = "1/1/2/4";
        this.namebox.style.paddingLeft = '10px';
        this.namebox.style.lineHeight = "30px";
        this.namebox.style.color = this.namecolor;
        
      

        this.displayvalue.addEventListener("mouseover", ()=>this.overvalue(this.displayvalue));
        this.displayvalue.addEventListener("mouseout", ()=>this.outvalue(this.displayvalue));
        this.displayvalue.addEventListener("click", ()=>this.clickvalue(this.displayvalue, this.inputvalue, this.inputslider.value));
        this.inputvalue.addEventListener("focusout", (e)=>{this.valuentered(this.inputvalue, this.displayvalue,this.inputslider,e);});
        this.inputslider.addEventListener("input", ()=>this.valuechanged(this.displayvalue,this.inputslider));
        this.inputvalue.addEventListener("keypress", (e)=>{this.valuentered(this.inputvalue, this.displayvalue,this.inputslider,e);});
    }
    sliderstyle(){
        //let l = (this.colorL+30)>100?this.colorL-50:100;
        style.innerHTML += "input[type='range']{-webkit-appearance: none; overflow:hidden; border-radius: 16px;}"+
        ".inputslider"+this.index+"sl::-webkit-slider-runnable-track{"+
        "height: 15px;"+
        "background: "+this.invertedlightcolor+";"+
        "border-radius: 16px;}"+
        ".inputslider"+this.index+"sl::-webkit-slider-thumb {"+
        "-webkit-appearance: none;"+
        "appearence: none;"+
        "height: 15px;"+
        "width: 15px;"+
        "background: "+this.color+";"+
        "border-radius: 50%;"+
        "border: 2px solid hsl("+this.colorH+" "+this.colorS+"% "+((this.colorL+30)>100?this.colorL-50:100)+"%);"+
        "box-shadow: -407px 0 0 400px "+this.displaycolor+";"+
        "}"
        ;

        style.innerHTML += ".inputslider"+this.index+"sl::-moz-range-track{"+
        "height: 15px;"+
        "background: "+this.invertedlightcolor+";"+
        "border-radius: 16px;}"+
        ".inputslider"+this.index+"sl::-moz-range-thumb {"+
        "-moz-appearance: none;"+
        "appearence: none;"+
        "height: 12px;"+
        "width: 12px;"+
        "background: "+this.color+";"+
        "border-radius: 50%;"+
        "border: 2px solid hsl("+this.colorH+" "+this.colorS+"% "+((this.colorL+30)>100?this.colorL-50:100)+"%);"+
        "box-shadow: -407px 0 0 400px "+this.displaycolor+";"+
        "}";

        style.innerHTML += ".inputvalue"+this.index+"sv::selection {background-color: "+this.color+"; color:"+this.namecolor+";}";
    }
    overvalue(a) {
        a.style.border = "1px solid rgb(20,20,20)";
        a.style.background ="rgb(220,220,220)";
    }
    outvalue(a){
        a.style.border = "1px solid rgb(255,255,255)";
        a.style.background = this.displaycolor;
    }
    clickvalue(a,b, value){
        b.style.display = "block";
        a.style.display = "none";
        b.value = value;
        b.select();
    }
    valuentered(a,b,c,e){
        if(e.type == "focusout"||e.keyCode == 13){
            b.style.display = "block";
            a.style.display = "none";
            let value = parseFloat(a.value);
            if (!isNaN(value)) {
                c.value = value;
                this.valuechanged(b,c);
            }
        }
    }
    valuechanged(a,b){
        a.innerHTML = b.value;
    }

}








////////////////////////////////////////////////////////////////
change();
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////

a = new Slider("TEST", dropDownul);
a.init();
b = new Slider("TEST 2", dropDownul,0,100,100, 1, -100, 200, 100);
b.init();
c = new Slider("Working", dropDownul,50,45,23,2,-1000,1000,500);
c.init();
