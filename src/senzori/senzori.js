window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt){
	var alpha=evt.alpha;
	var beta=evt.beta;
	var gamma=evt.gamma;
 document.getElementById("a").innerHTML ="Alpha="+Math.round(alpha).toString();
  document.getElementById("b").innerHTML = "Beta="+Math.round(beta).toString();
  document.getElementById("c").innerHTML = "Gamma="+Math.round(gamma).toString();
}