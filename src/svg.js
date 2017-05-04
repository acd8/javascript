var c1=document.getElementById("cerc1");
c1.addEventListener("touchmove", on_touch_move);


function on_touch_move(){
	var t=e.changedTouches[0];
	var x=c1.getAttribute("cx");
	alert(x);
}