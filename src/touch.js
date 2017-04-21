window.addEventListener("touchstart",ontouchstart);

var touch_colors = ["red","green","blue","pink"];

function ontouchstart(event){
	var touches = event.changedTouches;
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	for(var i = 0; i < touches.length;i++){
		ctx.beginPath();
		ctx.strokeStyle=touch_colors[i];
		ctx.arc(touches[i].pageX, touches[i].pageY,40,0,2*Math.PI);
		
		ctx.stroke();
	}
}
