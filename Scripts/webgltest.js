let canvas = document.createElement('canvas');
let ctx = canvas.getContext('webgl2') || canvas.getContext('experimental-webgl2');
const sw = window.innerWidth;
const sh = window.innerHeight;
canvas.width = sw;
canvas.height = sh;
canvas.innerhtml = "Your browser does not support HTML5 graphics";
document.body.style.margin="0px";
document.body.appendChild(canvas);

if (ctx!=null) {
    ctx.clearColor(0.0,0.8,0.0,1.0);
    ctx.clear(ctx.COLOR_BUFFER_BIT);
}
