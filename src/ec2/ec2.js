//---------------------------------------------------------------


function citeste(){
	var a=document.getElementById("a").value;
	var b=document.getElementById("b").value;
	var c=document.getElementById("c").value;

	var coef=[a,b,c];
	return coef;
}
//---------------------------------------------------------------
function calcuDelta(coeficienti){
return coeficienti[1]* coeficienti[1] -4 * coeficienti[0] *coeficienti[2];
}
//---------------------------------------------------------------

function calculRadacini(coef,delta){
	var x1_re,x1_im,x2_re,x2_im;
	if(delta >= 0){
			x1_re=(-coef[1] - Math.sqrt(delta))/(2*coef[0]);
			x1_im=0;
			x2_re=(-coef[1]+ Math.sqrt(delta)/(2*coef[0]));
			x2_im=0;
		}
		else{
			x1_re=(-coef[1])/(2*coef[0]);
			x1_im=-Math.sqrt(-delta)/(2*coef[0]);
			x2_re=(-coef[1])/(2*coef[0]);
			x2_im=+Math.sqrt(-delta)/(2*coef[0]);
		}
		var v= [x1_re,x1_im,x2_re,x2_im];
		return v;
}


function rezolva(){
	var coeficienti=citeste();
	var delta=calcuDelta(coeficienti);
	var radacini=calculRadacini(coeficienti,delta);
	afiseaza(radacini);

	
}
//---------------------------------------------------------------
function afiseaza(radacini){
	if(radacini[1]>0){
 	document.getElementById("x1").innerHTML="X1_re="+radacini[0].toString()+" x1_im="+radacini[1].toString();
}
else{
	document.getElementById("x1").innerHTML="X1_re="+radacini[0].toString()+" x1_im="+radacini[1].toString();
	if(radacini[3]>0){
	   document.getElementById("x2").innerHTML="X2_re="+radacini[2].toString()+" x2_im="+radacini[3].toString();
}
else{
 document.getElementById("x2").innerHTML="X2_re="+radacini[2].toString()+" x2_im="+radacini[3].toString();
}

}
}