var bgImg = document.createElement("img");
var jasonImg = document.createElement("img");
bgImg.src = "images/map.png";
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
jasonImg.src = "images/jason.gif";

var jason = {
  x:0,
  y:0
};

function draw(){
ctx.drawImage(bgImg,0,0);
ctx.drawImage(jasonImg,jason.x,jason.y);
}
setTimeout(draw, 1000);
