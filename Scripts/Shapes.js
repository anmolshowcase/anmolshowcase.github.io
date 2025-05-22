//Canvas Creation
let layers = ["BackGround"];
let maxlayers = 5;
let numberBox = 0;
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
let mvx = 0;
let mvy = 0;
let mcx = 0;
let mcy = 0;
let clickcounter = 0;
let drawcompleted = true;
let drawing = "";
let menuanimin = "slidein";
let menuanimout = "Vslideup";
let slideinAnim = '@keyframes slidein{ 0%{transform: translateX(400px);} 100%{transform: translateX(0);}}';
let VslideupAnim = '@keyframes Vslideup{ 0%{transform: translateY(400px);} 100%{transform: translateY(0);}}';
let VslidedownAnim = '@keyframes Vslidedown{ 0%{transform: translateY(0px);} 100%{transform: translateY(500px);}}';
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
style.innerHTML += VslideupAnim;
style.innerHTML += VslidedownAnim;

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

class Vector{
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }

    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }

    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }

    divide(scalar) {
        if (scalar != 0) {
            this.x /= scalar;
            this.y /= scalar;
        }
    }
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
        menuanimin = "Vslideup";
        menuanimout = "Vslidedown";
        dropDown.style.width = dropdownWidth;
        dropDown.style.bottom = dropdownBottom;
        dropDown.style.right = dropdownRight;
        dropDown.style.top = dropdownTop;
        controls.style.top = controlsTop;
        controls.style.bottom = controlsBottom;
        controls.style.right = controlsRight+"%";
        controls.style.width = controlsWidth+"px";
        controls.style.height = controlsWidth+"px";
        AddMenuBox.style.top = "";
        AddMenuBox.style.bottom = (dropDown.offsetHeight+2)+"px";
        AddMenuBox.style.left ="0";
        AddMenuBox.style.right = "";
        modifierMenuBox.style.top = "";
        modifierMenuBox.style.bottom = (dropDown.offsetHeight+2)+"px";
        modifierMenuBox.style.left ="0";
        modifierMenuBox.style.right = "";
        layerMenuBox.style.top = "";
        layerMenuBox.style.bottom = (dropDown.offsetHeight+2)+"px";
        layerMenuBox.style.left ="";
        layerMenuBox.style.right = nameBox.offsetLeft+"px";
        layerMenuBox.style.width = nameBox.offsetWidth + "px";
        infoBox.style.margin = "0px";
        infoBox.style.maxWidth = ""; 
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
        menuanimin = "slidein";
        menuanimout = "slideup";
        dropDown.style.width = dropdownWidth;
        dropDown.style.bottom = dropdownBottom;
        dropDown.style.right = dropdownRight;
        dropDown.style.top = dropdownTop;
        controls.style.top = controlsTop;
        controls.style.bottom = controlsBottom;
        controls.style.right = controlsRight;
        controls.style.width = controlsWidth+"px";
        controls.style.height = controlsWidth+"px";
        AddMenuBox.style.top = "0";
        AddMenuBox.style.bottom = "";
        AddMenuBox.style.left ="";
        AddMenuBox.style.right = (dropDown.offsetWidth+2)+"px";
        modifierMenuBox.style.top = "0";
        modifierMenuBox.style.bottom = "";
        modifierMenuBox.style.left ="";
        modifierMenuBox.style.right = (dropDown.offsetWidth+2)+"px";
        layerMenuBox.style.top = nameBox.offsetHeight-2 + "px";
        layerMenuBox.style.bottom = "";
        layerMenuBox.style.left ="";
        layerMenuBox.style.right = nameBox.offsetLeft+"px";
        layerMenuBox.style.width = nameBox.offsetWidth + "px";
        infoBox.style.margin = "0px 400px";

    }
}


//Page resized
window.onresize = Screenorientation;

//Make Canvas Background COlour to black
canvas.style.backgroundColor = "black"; // Set the background color to black
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
menucontainer.style.height = "100dvh";
menucontainer.style.minHeight = "100%";
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
dropDownul.style.gridTemplateRows="35px";
dropDownul.style.gridAutoRows="2fr";

//controls.onclick = function() {dropDown.style.display = dropDown.style.display === 'none'?'block':'none';};
controls.onclick = function() {
   
    dropDown.style.display= "block";
    dropDown.style.animation = menuanimin+" 500ms cubic-bezier(.18,.89,.32,1.28) 0s 1 normal both";
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
menuHeadBox.style.gridTemplateColumns = "35px 35px 1fr 35px 35px";
menuHeadBox.style.columnGap = "2px";


const hideMenuBox = document.createElement("div");
menuHeadBox.appendChild(hideMenuBox);
hideMenuBox.style.background = "hsl(0,0%,60%)";
hideMenuBox.style.padding = "2px";
hidebuttonCanvas = document.createElement("canvas");
hidebuttonCanvas.style.width = "31px";
hidebuttonCanvas.style.height = "31px";
hbwidth = hidebuttonCanvas.width;
hbheight = hidebuttonCanvas.height;
const hbctx = hidebuttonCanvas.getContext("2d");
hideMenuBox.appendChild(hidebuttonCanvas);



hideMenuBox.style.gridArea ="1/5/-1/-1";
hideMenuBox.style.height = "35px";
hideMenuBox.style.cursor = "pointer";


let arrow = new Path2D();
arrow.moveTo(0,hbheight*2/3);
arrow.lineTo(hbwidth/2,0);
arrow.lineTo(hidebuttonCanvas.width,hbheight*2/3);
arrow.closePath();





function hideButtoncreate(){
    console.log(Iorien);
    if(Iorien=="v"){
        hbctx.rotate(Math.PI);
        hbctx.translate(-hbwidth,-hbheight);
    }
    hbctx.fillStyle="hsl(0,0%,40%)";
    hbctx.fillRect(0,0,hbwidth,hbheight);
    hbctx.fillStyle = "hsl(0,0%,0%)";
    hbctx.fill(arrow);
    hbctx.translate(0,hbheight*2/3);
    hbctx.fill(arrow);
    hbctx.setTransform(1,0,0,1,1,1);
}
hideButtoncreate();
let hbcounter = 0;
let checkhb = false;
hidebuttonCanvas.addEventListener("mouseover", (e)=>overhidebutton(e.type));
hidebuttonCanvas.addEventListener("mouseout", (e)=>overhidebutton(e.type));
function overhidebutton(e){
    if(e=="mouseover"){
        checkhb =true;
        id = setInterval(animatehb, 1);
    }
    else{
        hbcounter=0;
        clearInterval(id);
        hideButtoncreate();
    }

}

function animatehb(){
    if(Iorien=="v"){
        hbctx.rotate(Math.PI);
        hbctx.translate(-hbwidth,-hbheight);
    }
    hbctx.fillStyle="hsl(0,0%,40%)";
    hbctx.fillRect(0,0,hbwidth,hbheight);
    hbctx.fillStyle = "hsl(0,0%,"+hbcounter+"%)";
    hbctx.translate(0,-(hbcounter%(hbheight*2/3)));
    hbctx.fill(arrow);
    hbctx.translate(0,hbheight*2/3);
    hbctx.fill(arrow);
    hbctx.translate(0,hbheight*2/3);
    hbctx.fill(arrow);
    hbctx.setTransform(1,0,0,1,1,1);
    hbcounter++;
}


hideMenuBox.addEventListener("click",hideMenu);
function hideMenu() {
    // Unhide the button
    dropDown.style.animation = menuanimout+" 1s cubic-bezier(.18,.89,.32,1.28) 0s 1 normal both";
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




const editMenuBox = document.createElement("div");
menuHeadBox.appendChild(editMenuBox);
editMenuBox.style.background = "hsl(0,0%,60%)";
editMenuBox.style.padding = "2px";
editbuttonCanvas = document.createElement("canvas");
editbuttonCanvas.style.width = "31px";
editbuttonCanvas.style.height = "31px";
edtwidth = editbuttonCanvas.width;
edtheight = editbuttonCanvas.height;
const edtctx = editbuttonCanvas.getContext("2d");
editMenuBox.appendChild(editbuttonCanvas);



editMenuBox.style.gridArea ="1/4/2/5";
editMenuBox.style.height = "35px";
editMenuBox.style.cursor = "pointer";

edtctx.fillStyle = "hsl(0,0%,40%)";
edtctx.fillRect(0,0,edtwidth,edtheight);
edtctx.lineWidth = 10;
edtctx.beginPath();
edtctx.rect(20,edtheight/2-25,edtwidth-40,50);
edtctx.moveTo(70,edtheight/2+10);
edtctx.lineTo(70,edtheight/2-10);
edtctx.stroke();
edtctx.lineWidth = 5;
edtctx.moveTo(85,edtheight/2-10);
edtctx.lineTo(55,edtheight/2-10);
edtctx.stroke();
edtctx.fillRect(100,0,50,edtheight);
edtctx.strokeStyle = "white";
edtctx.beginPath();
edtctx.moveTo(140,30);
edtctx.lineTo(110,30);
edtctx.moveTo(140,edtheight-30);
edtctx.lineTo(110,edtheight-30);
edtctx.moveTo(125,30);
edtctx.lineTo(125,edtheight-30);
edtctx.stroke();





let editname = true;
editMenuBox.addEventListener("click",clickedit);
function clickedit(){
    if(editname){
        editname = false;
        edtctx.fillStyle = "hsl(0,0%,40%)";
        edtctx.fillRect(0,0,edtwidth,edtheight);
        edtctx.strokeStyle = "hsl(120,50%,50%)";
        edtctx.beginPath();
        edtctx.lineWidth=30;
        edtctx.moveTo(50,edtheight/2+20);
        edtctx.lineTo(edtwidth/2,edtheight-30);
        edtctx.lineTo(edtwidth-20,20);
        edtctx.stroke();
    }
    else{
        editname=true;
        edtctx.fillStyle = "hsl(0,0%,40%)";
        edtctx.strokeStyle = "hsl(0,0%,0%)";
        edtctx.fillRect(0,0,edtwidth,edtheight);
        edtctx.lineWidth = 10;
        edtctx.beginPath();
        edtctx.rect(20,edtheight/2-25,edtwidth-40,50);0
        edtctx.moveTo(70,edtheight/2+10);
        edtctx.lineTo(70,edtheight/2-10);
        edtctx.stroke();
        edtctx.lineWidth = 5;
        edtctx.moveTo(85,edtheight/2-10);
        edtctx.lineTo(55,edtheight/2-10);
        edtctx.stroke();
        edtctx.fillRect(100,0,50,edtheight);
        edtctx.strokeStyle = "white";
        edtctx.beginPath();
        edtctx.moveTo(140,30);
        edtctx.lineTo(110,30);
        edtctx.moveTo(140,edtheight-30);
        edtctx.lineTo(110,edtheight-30);
        edtctx.moveTo(125,30);
        edtctx.lineTo(125,edtheight-30);
        edtctx.stroke();




    }
}


const modMenuBox = document.createElement("div");
menuHeadBox.appendChild(modMenuBox);
modMenuBox.style.background = "hsl(0,0%,60%)";
modMenuBox.style.padding = "2px";
modbuttonCanvas = document.createElement("canvas");
modbuttonCanvas.style.width = "31px";
modbuttonCanvas.style.height = "31px";
modwidth = modbuttonCanvas.width;
modheight = modbuttonCanvas.height;
const modctx = modbuttonCanvas.getContext("2d");
modMenuBox.appendChild(modbuttonCanvas);



modMenuBox.style.gridArea ="1/2/2/3";
modMenuBox.style.height = "35px";
modMenuBox.style.cursor = "pointer";


modctx.fillStyle ="hsl(0,0%,40%)";
modctx.fillRect(0,0,modwidth,modheight);
modctx.translate(modwidth/2,modheight/2);
modctx.fillStyle ="hsl(0,0%,0%)";
modctx.ellipse(0,0,100,50,0,0,tau);
modctx.rect(-40,0,80,modheight/2);
modctx.fill();
modctx.fillStyle ="hsl(0,0%,40%)";
modctx.fillRect(-70,10,140,-modheight/2);
modctx.beginPath();
modctx.moveTo(-80,10);
modctx.lineTo(0,30);
modctx.lineTo(80,10);
modctx.fill();

modctx.fillStyle ="hsl(0,0%,100%)";
modctx.translate(0,-20);
boltS = 30;
modctx.beginPath();
modctx.moveTo(boltS,0);
for(i=0;i<=6;i++){
    modctx.lineTo(Math.sin((tau/6)*i)*boltS*2,Math.cos((tau/6)*i)*boltS);
}
modctx.fill();

modMenuBox.addEventListener("click",modclicked);



const CreateMenuBox = document.createElement("div");
menuHeadBox.appendChild(CreateMenuBox);
CreateMenuBox.style.background = "hsl(0,0%,60%)";
CreateMenuBox.style.padding = "2px";
CreatebuttonCanvas = document.createElement("canvas");
CreatebuttonCanvas.style.width = "31px";
CreatebuttonCanvas.style.height = "31px";
Crtwidth = CreatebuttonCanvas.width;
Crtheight = CreatebuttonCanvas.height;
const Crtctx = CreatebuttonCanvas.getContext("2d");
CreateMenuBox.appendChild(CreatebuttonCanvas);



CreateMenuBox.style.gridArea ="1/1/1/2";
CreateMenuBox.style.height = "35px";
CreateMenuBox.style.cursor = "pointer";


CreateMenuBox.addEventListener("click", Addclicked);

Crtctx.fillStyle="hsl(0,0%,40%)";
Crtctx.fillRect(0,0,Crtwidth,Crtheight);
Crtctx.fillStyle="hsl(0,0%,100%)";
Crtctx.fillRect(Crtwidth/2-Crtwidth/12,Crtheight*0.1,Crtwidth/6,Crtheight*0.8);
Crtctx.fillRect(Crtwidth*0.1,Crtheight/2-Crtheight/12,Crtwidth*0.8,Crtheight/6);
Crtctx.lineCap="butt";

function Addclicked(){
    change();
    checkaddmenu = AddMenuBox.style.display;
    if(checkaddmenu=="none"){
        layerMenuBox.style.display = "none";
        modifierMenuBox.style.display="none";
        AddMenuBox.style.display = "inline";
        Crtctx.fillStyle="hsl(0,0%,40%)";
        Crtctx.fillRect(0,0,Crtwidth,Crtheight);
        Crtctx.translate(Crtwidth/2,Crtheight/2);
        Crtctx.strokeStyle="hsl(0,0%,100%)";
        Crtctx.lineWidth=25;
        s = 0.6;
        Crtctx.moveTo(Crtwidth*s/2,Crtheight*s/2);
        Crtctx.lineTo(-Crtwidth*s/2,-Crtheight*s/2);
        Crtctx.moveTo(Crtwidth*s/2,-Crtheight*s/2);
        Crtctx.lineTo(-Crtwidth*s/2,Crtheight*s/2);
        Crtctx.stroke();
        Crtctx.setTransform(1,0,0,1,1,1);
    }
    else{
        AddMenuBox.style.display = "none";
        Crtctx.fillStyle="hsl(0,0%,40%)";
        Crtctx.fillRect(0,0,Crtwidth,Crtheight);
        Crtctx.fillStyle="hsl(0,0%,100%)";
        Crtctx.fillRect(Crtwidth/2-Crtwidth/12,Crtheight*0.1,Crtwidth/6,Crtheight*0.8);
        Crtctx.fillRect(Crtwidth*0.1,Crtheight/2-Crtheight/12,Crtwidth*0.8,Crtheight/6);
    }
}

let addmenuitems = ["Box", "Line", "Circle"];
let AddMenuBox = document.createElement("div");
document.body.appendChild(AddMenuBox);
AddMenuBox.style.position="absolute";
AddMenuBox.style.top="0";
AddMenuBox.style.display="none";
AddMenuBox.style.color="rgba(255,255,255,1)";
AddMenuBox.style.background = "white";
AddMenuBox.style.border = "1px solid black";
AddMenuBox.style.textAlign="center";
AddMenuBox.style.overflowY = "scroll";
AddMenuBox.style.maxHeight = "100px";
AddMenuBox.style.cursor = "pointer";




class AddMenuitem{
    constructor(name = "okay"){
        this.Name = name;
    }
    init(){
        this.item = document.createElement("div");
        this.item.className = "add";
        this.item.innerHTML = this.Name;
        this.item.style.border = "1px black dashed";
        this.item.style.background = "grey";
        this.item.style.padding = "5px";
        this.item.style.minWidth = "70px";    
        AddMenuBox.appendChild(this.item);


        this.item.addEventListener("click",()=>this.itemclicked(this.Name));
        this.item.addEventListener("mouseenter",()=>this.overitem(this.item));
        this.item.addEventListener("mouseleave",()=>this.outitem(this.item));
    }
    itemclicked(a){
        clickcounter=0;
        drawing=a;
        drawcompleted=false;
        draw(a);
        Addclicked();
    }
    overitem(a){
        a.style.background = "red";
    }
    outitem(a){
        a.style.background = "grey";
    }
    menu(){
        return this.item;
    }
}


addbox = new AddMenuitem("Box");
addbox.init();
addline = new AddMenuitem("Line");
addline.init();
addcircle = new AddMenuitem("Circle");
addcircle.init();
addPencil = new AddMenuitem("Pencil");
addPencil.init();







const nameBox = document.createElement("div");
menuHeadBox.appendChild(nameBox);
nameBox.style.background = "hsl(0,0%,60%)";
nameBox.style.padding = "2px";
nameBox.style.height = "35px";
nameBox.style.gridArea ="1/3/2/4";
nameBox.style.cursor = "pointer";
const nametag = document.createElement("div");
nameBox.appendChild(nametag);
nametag.style.background = "hsl(0,0%,40%)";
nametag.style.width = "100%";
nametag.style.height = "100%";
nametag.style.color = "white";
nametag.style.textAlign = "center";
nametag.style.paddingTop = "5px";
nametag.innerHTML = "BackGround";
nametag.style.userSelect = "none";
nameBox.addEventListener("click", layerclicked);


const modifierMenuBox = document.createElement("div");
document.body.appendChild(modifierMenuBox);
modifierMenuBox.style.position="absolute";
modifierMenuBox.style.top="0";
modifierMenuBox.style.display="none";
modifierMenuBox.style.color="rgba(255,255,255,1)";
modifierMenuBox.style.background = "white";
modifierMenuBox.style.border = "1px solid black";
modifierMenuBox.style.textAlign="center";
modifierMenuBox.style.overflowY = "scroll";
modifierMenuBox.style.maxHeight = "100px";
modifierMenuBox.style.cursor = "pointer";





class modMenuitem{
    constructor(name = "okay"){
        this.Name = name;
    }
    init(){
        this.item = document.createElement("div");
        this.item.className = "add";
        this.item.innerHTML = this.Name;
        this.item.style.border = "1px black dashed";
        this.item.style.background = "grey";
        this.item.style.padding = "5px";
        this.item.style.minWidth = "70px";    
        modifierMenuBox.appendChild(this.item);


        this.item.addEventListener("click",()=>this.itemclicked(this.Name));
        this.item.addEventListener("mouseenter",()=>this.overitem(this.item));
        this.item.addEventListener("mouseleave",()=>this.outitem(this.item));
    }
    itemclicked(a){
        console.log(a);
        modclicked();
    }
    overitem(a){
        a.style.background = "red";
    }
    outitem(a){
        a.style.background = "grey";
    }
    menu(){
        return this.item;
    }
}


function modclicked(){
    change();
    checkmodmenu = modifierMenuBox.style.display;
    if(checkmodmenu=="none"){
        layerMenuBox.style.display = "none";
        if(AddMenuBox.style.display!="none"){
            Addclicked();
        }
        modifierMenuBox.style.display = "inline";
    }
    else{
        modifierMenuBox.style.display = "none";
    }
}

duplicatemod = new modMenuitem("Duplicate");
arraymod = new modMenuitem("Array");
deletemod = new modMenuitem("Delete");
moveupmod = new modMenuitem("Move Up");
movedownmod = new modMenuitem("Move Down");
mergemod = new modMenuitem("Merge");
duplicatemod.init();
arraymod.init();
deletemod.init();
moveupmod.init();
movedownmod.init();
mergemod.init();








const layerMenuBox = document.createElement("div");
document.body.appendChild(layerMenuBox);
layerMenuBox.style.position="absolute";
layerMenuBox.style.top="0";
layerMenuBox.style.display="none";
layerMenuBox.style.color="rgba(255,255,255,1)";
layerMenuBox.style.background = "white";
layerMenuBox.style.border = "1px solid black";
layerMenuBox.style.textAlign="center";
layerMenuBox.style.overflowY = "scroll";
layerMenuBox.style.maxHeight = "100px";
layerMenuBox.style.cursor = "pointer";





class layer{
    constructor(name = "okay"){
        this.Name = name;
        this.data = [];
    }
    init(){
        this.zindex = maxlayers - layers.length;
        this.item = document.createElement("div");
        this.item.className = "add";
        this.item.innerHTML = this.Name;
        this.item.style.border = "1px black dashed";
        this.item.style.background = "grey";
        this.item.style.padding = "5px";
        this.item.style.minWidth = "70px";    
        layerMenuBox.appendChild(this.item);


        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.canvas.style.backgroundColor = this.bgColor;
        this.canvas.style.display = "inline";
        this.canvas.style.position = "absolute";
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        setZindex(this.zindex);


        this.item.addEventListener("click",()=>this.itemclicked(this.Name));
        this.item.addEventListener("mouseenter",()=>this.overitem(this.item));
        this.item.addEventListener("mouseleave",()=>this.outitem(this.item));
    }
    setZindex(a){
        this.canvas.style.zIndex = a;
    }
    itemclicked(a){
        console.log(a);
        layerclicked();
    }
    overitem(a){
        a.style.background = "red";
    }
    outitem(a){
        a.style.background = "grey";
    }
    adddata(a){
        this.index = this.data.length;
        this.data[this.index] = a;
    }
    draw(){
        this.ctx.setTransform(1,0,0,1,1,1);
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas);
        this.ctx.translate(this.data[0].x,this.data[0].y);
        this.ctx.rotate(this.data[1]);
        for(var i=2;i<this.data.length;i++){
            if(this.data[i]=="f"){
                this.ctx.fill();
            }
            else if(this.data[i]=="s"){
                this.ctx.stroke();
            }
            else if(this.data[i]=="b"){
                this.ctx.beginPath();
                this.ctx.moveTo(this.data[i+1].x,this.data[i+1].y);
            }
            else{
                this.ctx.lineTo(this.data[i].x , this.data[i].y);
            }
        }
    }
    pivot(){
        this.data[0].x = pivot// change with pivot slider value
        this.data[0].y = pivot// change with pivot slider value
        for (let i = 2; i < this.data.length; i++) {
            if(this.data[i]!="f"&&this.data!="s"&&this.data!="b"){
                this.data[i].x -= pivot// change with pivot slider value
                this.data[i].y -= pivot// change with pivot slider value
            }
            
        }
    }
    rotate(){
        this.data[1] = rotate// change with pivot slider value
    }
    translate(){
        
    }
    menu(){
        return this.item;
    }
}

function layerclicked(){
    change();
    checkmodmenu = layerMenuBox.style.display;
    if(checkmodmenu=="none"){
        if(AddMenuBox.style.display!="none"){
            Addclicked();
        }
        modifierMenuBox.style.display = "none";
        layerMenuBox.style.display = "inline";
    }
    else{
        layerMenuBox.style.display = "none";
    }
}
bhas = new layer("test");
bhas.init();
///////////////////////////////////////////////////////////////////////////////

/*
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
*/

//////////////////////////////////////////////////////////////////////////////
////////info box/////////////

const infoBox = document.createElement("div");
document.body.appendChild(infoBox);
infoBox.innerHTML = "For Menu click on the BUTTON";
infoBox.style.padding = "10px 0px";
infoBox.style.position = "absolute";
infoBox.style.top = "0";
infoBox.style.borderRadius = "0px 0px 15px 15px";
infoBox.style.left = "0";
infoBox.style.right="0";
infoBox.style.textAlign = "center";
infoBox.style.userSelect = "none";

infoBox.style.background = "hsla(0,0%,100%,0.4)";
infoBox.style.color = "white";







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
        this.namebox.style.userSelect = "none";
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

function infoupdate(text){
    infoBox.innerHTML = text;
}
canvas.addEventListener("mousemove", (e)=>mousemove(e));
canvas.addEventListener("click", (e)=>mouseclick(e));
function mousemove(e){
    mvx = e.clientX;
    mvy = e.clientY;
    infoupdate(mvx+", "+mvy+" :  "+mcx+", "+mcy+" : "+clickcounter);
    if(!drawcompleted&&clickcounter==1){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.fillRect(mcx,mcy,mvx-mcx,mvy-mcy);
        
    }
}
function mouseclick(e){
    mcx = e.clientX;
    mcy = e.clientY;
    clickcounter++;
    if (!drawcompleted){
        draw(drawing);
    }
}

function draw(type){
    hideMenu();
    if(type=="Box"){
        if(clickcounter == 0){
            infoupdate("click");
        }
        else if(clickcounter == 1){
            boxSX1 = mcx;
            boxSY1 = mcy;
            console.log(boxSX1,boxSY1);
            ctx.fillStyle = "red";
            ctx.setTransform(1,0,0,1,1,1);
        }
        else if(clickcounter == 2){
            layerindex = layers.length;
            numberBox++;
            layers[layerindex] = new shape(type,layername="box",);
            layers[layerindex].posX = boxSX1;
            layers[layerindex].posY = boxSY1;
            layers[layerindex].sizeX = mcx-boxSX1;
            layers[layerindex].sizeY = mcy-boxSY1;
            
            layers[layerindex].init();
            layers[layerindex].layer.item.innerHTML = "Box_"+numberBox;
            layers[layerindex].draw();
            drawcompleted =true;
        }
    }

            
}

class shape{
    constructor(type,layeref="notset", posX=0, posY=0,rotation=0,sizeX=0, sizeY=0, radius1=0, radius2=0, InAngle=0, OutAngle = 0,pivotX=0,pivotY=0, fgColor="grey",bgColor="rgba(0,0,0,0)",lineColor="black",thickness=4,layername="test",index=0,fill=true,stroke=true){
        this.type = type;
        this.posX = posX;
        this.posY = posY;
        this.rotation = rotation;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.radius1 = radius1;
        this.radius2 = radius2;
        this.IAngle = InAngle;
        this.OAngle = OutAngle;
        this.pivotX = pivotX;
        this.pivotY = pivotY;
        this.fgColor = fgColor;
        this.bgColor = bgColor;
        this.linecolor = lineColor;
        this.thickness = thickness;
        this.data = [];
        this.name = layername;
        this.layer = layeref == "notset"?new layer(this.name):layeref;
        this.index = index;
        this.fill = fill;
        this.stroke = stroke;
    }
    init(){
        console.log("here");
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.canvas.style.backgroundColor = this.bgColor;
        this.canvas.style.display = "inline";
        this.canvas.style.position = "absolute";
        this.canvas.style.top = 0;
        this.canvas.style.left = 0;
        this.pivotX = this.posX;
        this.pivotY = this.posY;
        if(this.layeref=="notset"){

        }
        this.layer.init();
        this.datainit();
    }
    draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.setTransform(1,0,0,1,1,1);
        this.ctx.translate(this.data[0], this.data[1]);
        this.ctx.rotate(this.rotation);
        if(this.type == "Box"){
            this.ctx.rect(this.data[2],this.data[3],this.data[4],this.data[5]);
        }
        else if(this.type == "Arc"){
            this.ctx.arc(this.data[2],this.data[3],this.data[4],this.data[5],this.data[6]);
        }
        if(this.stroke){
            this.ctx.strokeStyle = this.linecolor;
            this.ctx.stroke();
        }
        if(this.fill){
            this.ctx.fillStyle = this.fgColor;
            this.ctx.fill();
        }
    }
    datainit(){
        switch(this.type){
            case "Box":
                this.data[0] = this.pivotX;
                this.data[1] = this.pivotY;
                this.data[2] = this.posX-this.pivotX;
                this.data[3] = this.posY-this.pivotY;
                this.data[4] = this.sizeX-(this.posX-this.pivotX);
                this.data[5] = this.sizeY-(this.posY-this.pivotY);
                break;
        }    
    }
}
