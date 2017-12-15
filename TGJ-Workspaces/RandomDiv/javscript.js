function init(){
    canvas = document.querySelectorAll("#myCanvas")[0];
    ctx = canvas.getContext("2d");

    setInterval(draw, 10);
 
}
var x = Math.floor(Math.random()*501)+1;
var y = Math.floor(Math.random()*501)+1;
var width = 100;
var height = 100;
var xVel = Math.floor(Math.random()*6) + 1;
var yVel = Math.floor(Math.random()*6) + 1;

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath(); // if this is deleted it will delete background piece by piece     
    ctx.lineWidth = "6";
    ctx.strokeStyle = "green";
    ctx.fillStyle = "#FF00FF";
    for (var i = 0; i < Math.random(Math.random()*6); i++) {       
         if (y+height > canvas.height || y < 0){
            yVel1 *= -1;
            }
            if (x < 0 || x + width > canvas.width){
                xVel1 *= -1;
            }
        ctx.arc(i+x, i+y, width, height, Math.PI*2, true); 
       
        }
    ctx.fill();
    ctx.stroke();
    x += xVel;
    y += yVel;
}

