window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt){
	var alpha=evt.alpha;
	var beta=evt.beta;
	var gamma=evt.gamma;
 document.getElementById("a").innerHTML ="Alpha="+Math.round(alpha).toString();
  document.getElementById("b").innerHTML = "Beta="+Math.round(beta).toString();
  document.getElementById("c").innerHTML = "Gamma="+Math.round(gamma).toString();
  var canvas=document.getElementById("canvas");
  var ctx= canvas.getContext("2d");
  ctx.setTransform(1, 0, 0, 1, 0, 0);
 ctx.clearRect(0,0, canvas.width,canvas.height);
  var raza=20;
  var centru={x:canvas.width/2, y:canvas.height/2};
  var laturaPatrat=50;
  
  ctx.translate(centru.x/2,centru.y/2);
  ctx.rotate(alpha*Math.PI/180);
  ctx.beginPath();
//ctx.arc(centru.x +gamma*(canvas.width /2-raza), centru.y+beta*(canvas.height /2-raza), raza, 0, 2 * Math.PI);
	ctx.rect(-laturaPatrat /2 + gamma * (canvas.width/2 -laturaPatrat * 0.71)/90, - laturaPatrat/2 + beta * (canvas.width/2 -laturaPatrat * 0.71)/90, laturaPatrat,laturaPatrat );
ctx.stroke();

}