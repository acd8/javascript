//---------------------------------------------------------------
function calcuDelta(coeficienti){
return coeficienti.b* coeficienti.b -4 * coeficienti.a *coeficienti.c;
}
//---------------------------------------------------------------
function ec2(){

	this.citeste=function(){
		this.a=document.getElementById("a").value;
		this.b=document.getElementById("b").value;
		this.c=document.getElementById("c").value;
	}


	this.rezolva=function(){
		var delta=calcuDelta(this);
			if(delta >= 0){
			this.x1={re:(-this.b - Math.sqrt(delta))/(2*this.a),im:0};
			this.x2={re:(-this.b+ Math.sqrt(delta)/(2*this.a)),im:0};
		}
		else{
			this.x1={re:(-this.b)/(2*this.a), im:-Math.sqrt(-delta)/(2*this.a)};
			this.x2={re:(-this.b)/(2*this.a), im:+Math.sqrt(-delta)/(2*this.a)};
		}
		
	}

	this.afiseaza=function(){
			if(this.x1.im>0){
 	document.getElementById("x1").innerHTML="X1_re="+this.x1.re.toString()+" x1_im="+this.x1.im.toString();
}
else{
	document.getElementById("x1").innerHTML="X1_re="+this.x1.re.toString()+" x1_im="+this.x1.im.toString();
	if(this.x2.im>0){
	   document.getElementById("x2").innerHTML="X2_re="+this.x2.re.toString()+" x2_im="+this.x2.im.toString();
}
else{
 document.getElementById("x2").innerHTML="X2_re="+this.x2.re.toString()+" x2_im="+this.x2.im.toString();
}

}
	}
	
}
//---------------------------------------------------------------
function rezolva(){
	var e=new ec2();
	e.citeste();
	e.rezolva();
	e.afiseaza();	
}
//---------------------------------------------------------------
