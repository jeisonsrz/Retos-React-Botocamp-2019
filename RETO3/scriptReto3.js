
function salario1(){
var ns;
var salario =parseInt(document.getElementById('s1').value);
var result1= document.getElementById("resultado1");
  
if((salario>=0)&&(salario<=9000)){
    ns= salario+(salario*0.20);
    console.log(ns);
    result1.innerHTML=ns;
    }

if((salario>9000)&&(salario<=15000)){
        ns= salario+(salario*0.10);
        console.log(ns);
        result1.innerHTML=ns;
    }

if((salario>15000)&&(salario<=20000)){
        ns= salario+(salario*0.05);
        console.log(ns);
        result1.innerHTML=ns;
    }

if((salario>20000)){
        ns= salario;
        console.log(ns);
        result1.innerHTML=ns;
    }

}

function pi2(){
   
    var vpi=1;

    var pi2 = parseInt(document.getElementById("terminos2").value);
           
    var resPi = document.getElementById("resultado2");
    resPi.innerHTML=  "";
  
    for (i = 1; i <= pi2; i++) {
    vpi *= (4 * i * i) / (((2 * i) - 1) * ((2 * i) + 1))
    console.log(vpi)
    }
    vpi *= 2;
    alert("El resultado de PI es: "+ vpi);
    resPi.innerHTML=  resPi.innerHTML+ vpi;
  
}

function punto3(){
    var mayor=0;
    var menor=0;
    var nump3 = document.getElementById('numP3').value;
    var resul= document.getElementById('resultado3');
    let valorDelTextArea=nump3;
    console.log(valorDelTextArea);

    let valores=obtenerValores(valorDelTextArea);

    function obtenerValores(texto) {
    if (!texto) return []; // ningún valor en una cadena vacía
  
    let valores=texto.split(',');
  
    return valores.map(v=> v? v.trim() : undefined );
    }
    
    console.log(valores);
    mayor=Math.max.apply(null, valores);
    menor=Math.min.apply(null, valores);
    console.log(mayor);
    console.log(menor);
    alert("El numero mayor es: "+ mayor+" y el numero menor es: "+ menor);
    resul.innerHTML="El numero mayor es: "+ mayor+" y el numero menor es: "+ menor;
    
    }

    function pascuaP4(){
        var a,b,c,d,e,n,diaPascua;
        
        var añoP4 = document.getElementById('añoPascua').value;
        var res4 = document.getElementById('resultado4');
            console.log("Boton4");
        
            if(añoP4 >= 1990 && añoP4 <= 2000)
            {
                a = añoP4%19;
                b = añoP4%4;
                c = añoP4%7;
                d = (19*a + 24)%30;
                e = (2*b+ 4*c + 6*d + 5)%7;
                n = 22 + d + e;
                dia(n);
                var diaPascua = diaPascua + ' de ' + mes + ' de ' + añoP4;
                alert("El dia de pascua es: "+ diaPascua);
                res4.innerHTML= "El dia de pascua es: "+ diaPascua;
              
            }
            else{
                alert("Ingrese un año correcto entre 1990 y 2000 ");
                res4.innerHTML="Ingrese un año correcto entre 1990 y 2000 ";
              
            }
           
        
            function dia(nd)
			{
				if(nd <= 31)
	    		{
	    			diaPascua = nd;
	    			mes = 'marzo';
	    		}
	    		else
	    		{
	    			diaPascua = nd -31;
	    			mes = 'abril'
	    		}
			}
        }

        function bisiesto5(){

    
            var texto = document.getElementById("resultado5");
            
            var ano = 0;
            
            
                ano = parseInt(document.getElementById("añoB").value);
                
                if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0){
                   
                        alert("El año "+ ano +" SI es bisiesto");
                        texto.innerHTML= "El año "+ ano +" SI es bisiesto";
                        console.log("El año SI es bisisto");
                    }else{
                        alert("El año "+ ano +" NO es bisiesto");
                        texto.innerHTML= "El año "+ ano +" NO es bisiesto";
                        console.log("El año NO es bisisto");
                    }
            
                
                
                texto.style.display = "inline";
                
            
            }

function perfecto7(){

        
            var catidad = document.getElementById('numPerfecto').value;
            var resultado7 = document.getElementById('resultado7');
                console.log("Boton5");
                resultado7.innerHTML="";
            for(var i=2; i<=500;i++){
                b=0;
                for(var j=1; j<=Math.floor(i/2);j++){
                    if(parseInt(i)%parseInt(j)==0)
                    b=b+parseInt(j);

                }

                if(b==i){
                    
                    console.log();
                    alert("El numero "+i+" es perfecto \n");
                    resultado7.innerHTML=resultado7.innerHTML+i+"--";
              
                }
                
            }

            
            
}

function euler8(){

    var elevado = parseInt(document.getElementById('elevado').value);
    var resultado8 = document.getElementById('resultado8');
        console.log("Boton8");
        resultado8.innerHTML="";

        var e=Math.exp(elevado);
        console.log(e.toFixed(2));
        alert("El resultado de e^"+elevado+" es: "+e.toFixed(2));
        resultado8.innerHTML="e^"+elevado+" = "+e.toFixed(2);
    }



function conejos9(){

    var cone = document.getElementById('conejos9').value;
    var resultado9=document.getElementById("resultado9");
    
    var a=0,b=1,n,suma=0,cont=0;
   for(var i=0;suma<cone;i++){
    suma=a+b;
    a=b;
    b=suma;
      console.log(i);
      cont++;
   }
       
   console.log(cont+" Meses");
   alert("El # de meses para obtener "+cone+" conejos es: "+cont+" meses");
   resultado9.innerHTML="El # de meses para obtener "+cone+" conejos es: "+cont+" meses";

}

function mcd10(){

    function MCD(){
        if (arguments.length<2) return false;
        if (arguments.length==2)return (arguments[1]==0?arguments[0]:MCD(arguments[1],arguments[0]%arguments[1]));
        var arr=[].splice.call(arguments,0);
        arr.splice(0,2,MCD(arr[0],arr[1]));
        return MCD.apply(window,arr);
      }

    var input = document.getElementById('numMCD').value;
    var numbers = []; 
    var idx = 0;  
  
    for(var i = 0; i < input.length; i++) {
      if (input[i] == ',') { 
        numbers.push(parseInt(input.substring(idx,i))); 
        idx = i + 1; 
      } else if (i == input.length - 1) { 
        numbers.push(parseInt(input.substring(idx))); 
      }
    }
    var resultado10=document.getElementById("resultado10");
    
    resultado10.innerText = MCD.apply(window, numbers);
 

    console.log('MCD:', MCD.apply(window, numbers));


}


function primo11(){

		var valor=parseInt(document.getElementById("numPrimo").value);
        var resultado11=document.getElementById("resultado11");
        var NumeroPrimo=true;
 
		for(i=1;i<valor;i++)
		{
			if(valor/i == Math.round(valor/i) && i!=1 && i!=valor)
			{
				NumeroPrimo=false;
				break;
			};
		};
 
		if(NumeroPrimo)
			{resultado11.innerHTML="El numero "+valor+" es Primo";
            alert("El numero "+valor+" es Primo");}
            else
            {resultado11.innerHTML="El numero "+valor+" NO es Primo";
            alert("El numero "+valor+" NO es Primo");
            }
            
	

}

function asteriscos14(){

    var respuesta14 = document.getElementById("resultado14");
    respuesta14.innerHTML="";
   var f,c;
    for (f=1;f<=5;f++)
    { 
        for(c=1;c<=f;c++)
        {
            respuesta14.innerHTML=respuesta14.innerHTML+"*";  
          
        }   
        respuesta14.innerHTML=respuesta14.innerHTML+'<br>';
    }
   
}

function perfecto15(){
    var numP= document.getElementById("perfecto15").value;
    var respuesta15 = document.getElementById("resultado15");
    respuesta15.innerHTML="";

    for(var i=2; i<=numP;i++){
        b=0;
        for(var j=1; j<=Math.floor(i/2);j++){
            if(parseInt(i)%parseInt(j)==0)
            b=b+parseInt(j);

        }

        if(b==i){
            
            console.log();
            alert("El numero "+i+" es perfecto \n");
            respuesta15.innerHTML=respuesta15.innerHTML+i+"--";
      
        }
        
    }

}

function punto17(){
    var mayor=0;
    var menor=0;
    var nump3 = document.getElementById('numP17').value;
    var resul17= document.getElementById('resultado17');
    let valorDelTextArea=nump3;
    console.log(valorDelTextArea);

    let valores=obtenerValores(valorDelTextArea);

    function obtenerValores(texto) {
    if (!texto) return []; // ningún valor en una cadena vacía
  
    let valores=texto.split(',');
  
    return valores.map(v=> v? v.trim() : undefined );
    }
    
    console.log(valores.length);
    mayor=Math.max.apply(null, valores);
    menor=Math.min.apply(null, valores);
    console.log(mayor);
    console.log(menor);
    alert("El numero mayor es: "+ mayor+" y el numero menor es: "+ menor);
    resul17.innerHTML="El numero mayor es: "+ mayor+" y el numero menor es: "+ menor;
    
}


function evaluar18(){

     var textoR = document.getElementById("resultado18");
     var numero = parseInt(document.getElementById("evaluarNum").value);
         if(numero > 0){
             console.log("El numero es positivo");
             textoR.innerHTML= "El numero es positivo(+)";
         }
         if(numero < 0){
             console.log("El numero es negativo");
             textoR.innerHTML= "El numero es  negativo(-)";
         }
         if(numero === 0){
             console.log("El numero es cero");
             textoR.innerHTML= "El numero es  cero(0)";
         }
         
        
 

}

