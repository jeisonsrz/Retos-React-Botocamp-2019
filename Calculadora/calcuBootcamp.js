var borrar = false;

   function escribir(n){
		var caja2 = document.f1.txtnum2.value;
		if (borrar) {
			document.f1.txtnum2.value="";
			borrar = false;
			document.f1.txtnum2.value = n;
		}
		else if (caja2 == "0" && n != "."){
			cajao = caja2.replace("0", "")
			document.f1.txtnum2.value = cajao + n;
		}
		else{
			document.f1.txtnum2.value = caja2 + n;
		}
	}
	
	function arit(o){
		var caja1 = document.f1.txtnum1.value;
		var caja2 = document.f1.txtnum2.value;
		var unum = caja1.substring(caja1.length-1);
		calcular()
		if (unum == "+" || unum == "-" || unum=="*" || unum=="/") {
			unum = unum.replace(unum,o);
			var res = caja1.substring(0,caja1.length-1);
			document.f1.txtnum1.value = res+unum;
		}
		if (caja1 == "" && caja2 != ""){
			document.f1.txtnum1.value = caja2 + o;
		}
		else{
			document.f1.txtnum1.value = caja1 + caja2 + o;
 		}
 		borrar = true;
	}
	function calcular(){
		var caja1 = document.f1.txtnum1.value;
		var caja2 = document.f1.txtnum2.value;
		document.f1.txtnum2.value = eval(caja1 + caja2);
		document.f1.txtnum1.value = "";
		borrar = true;
		blocdel = true;
	}
	function masmenos(){
		var caja2 = document.f1.txtnum2.value;
		if (caja2 > 0){
			document.f1.txtnum2.value = "(-" + caja2 + ")";
		}
		else{
			cajaplus = caja2.replace(/[-|(|)]/g, "");
			document.f1.txtnum2.value = cajaplus;
		}
	}