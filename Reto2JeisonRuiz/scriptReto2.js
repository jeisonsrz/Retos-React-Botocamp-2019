
var suma=0;
var media=0;
var nota=0;
var nm1,nm2,nm3,nm4;
var FuerzaAt=0;
var Energia=0;
var HipotenusaR=0;
var AreaT=0;



function sumar(){


    
var n1 = document.getElementById('n1').value;
var n2 = document.getElementById('n2').value;
var n3 = document.getElementById('n3').value;
var n4 = document.getElementById('n4').value;


if((n1<0)||(n1>100)){
    alert('numero1 no valido');
    nm1=0;
    }
if((n2<0)||(n2>100)){
    alert('numero2 no valido');
    nm2=0;
    }
if((n3<0)||(n3>100)){
    alert('numero3 no valido');
    nm3=0;
    }
if((n4<0)||(n4>100)){
    alert('numero4 no valido');
    nm4=0;
    }

    console.log("Boton");


if((nm1==0)||(nm2==0)||(nm3==0)||(nm4==0)){
    alert("Las notas estan mal escritas--CORREGIR☢");
    document.getElementById("resultado").innerHTML= "Las notas estan mal escritas--ERROR☢";
    nm1=1;
    nm2=1;
    nm3=1;
    nm4=1;
}
else{
    suma = parseInt(n1)+parseInt(n2)+parseInt(n3)+parseInt(n4);
    media= suma/4;
    console.log(suma);
    console.log(media);
    if(media<=59){
        nota=" -->E-Pesima😰";
    }
    else if(media>=60 && media<=69){
        nota=" -->D-Mala😞";    
    }
    else if(media>=70 && media<=79){
        nota=" -->C-Regular😅";    
    }
    else if(media>=80 && media<=89){
        nota=" -->B-Normal👍";    
    }
    else if(media>=90 && media<=100){
        nota=" -->🎁A-Excelente🎉";    
    }
    alert("La NOTA es: "+ media + nota);
    document.getElementById("resultado").innerHTML= media+nota;
  
}

}

function FuerzaA(){

        
var m1 = document.getElementById('m1').value;
var m2 = document.getElementById('m2').value;
var d = document.getElementById('distancia').value;

    console.log("Boton2");

   var GP2=(6.673*(10**-8)).toPrecision(2);
    console.log(GP2);

    var multip2= (GP2*m1*m2).toPrecision(2);
    console.log(multip2);
    var division= (multip2/(d**2)).toPrecision(2);
    console.log(division);
    FuerzaAt = parseFloat(division);
    console.log(FuerzaAt.toPrecision(2)); 
    
    alert("La Fuerza de atracción es: "+ FuerzaAt+ "g*cm/seg^2");
    document.getElementById("resultado2").innerHTML= FuerzaAt + "g*cm/seg^2";
  
}

function einstein(){

        
    var masaE = document.getElementById('masaE').value;
   
        console.log("Boton3");
    
       var CEinstein=(2.997925*(10**10)).toPrecision(2);
        console.log(CEinstein);
    
        var multipE= (CEinstein*(masaE**3)).toPrecision(2);
        console.log(multipE);
        
        Energia = parseFloat(multipE);
        console.log(Energia.toPrecision(2)); 
        
        alert("La Fuerza de atracción es: "+ Energia.toPrecision(2) + " ergios");
        document.getElementById("resultado3").innerHTML= Energia.toPrecision(2) + " ergios";
      
    
    
    }

    function Hipotenusa(){

        
        var la = document.getElementById('la').value;
        var lb = document.getElementById('lb').value;
            console.log("Boton4");
        
            var la1=(la**2);
            console.log(la1);

            var lb1=(lb**2);
            console.log(lb1);

            var hipo= (Math.sqrt(la1+lb1));
            console.log(hipo);
            
            HipotenusaR = parseFloat(hipo);
            console.log(HipotenusaR.toFixed(2)); 
            
            alert("La Hipotenusa es: "+ HipotenusaR.toFixed(2) + " cm");
            document.getElementById("resultado4").innerHTML= HipotenusaR.toFixed(2) + " cm";
          
        
        
        }

function AreaT5(){

        
            var la5 = document.getElementById('la5').value;
            var lb5 = document.getElementById('lb5').value;
            var lc5 = document.getElementById('lc5').value;
                console.log("Boton5");
            
                var p5=parseFloat(la5)+parseFloat(lb5)+parseFloat(lc5);
                console.log(p5);
                var p5div=p5/2;
                console.log(p5div);
                var p51=(p5*(p5-parseFloat(la5))*(p5-parseFloat(lb5))*(p5-parseFloat(lc5)));
                console.log(p51);
    
                var raiz5= (Math.sqrt(p51));
                console.log(raiz5);
                
                AreaT = parseFloat(raiz5);
                console.log(AreaT.toFixed(2)); 
                
                alert("El Área es: "+ AreaT.toFixed(2) + " cm");
                document.getElementById("resultado5").innerHTML= AreaT.toFixed(2) + " cm";
              
            
            
}

function hora6(){

           
    var horaC = document.getElementById('hora1').value;
    console.log(horaC.length);
    console.log("Convertir hora");
    hc1=horaC.substring(2,0);
    console.log(hc1);
    hc2=horaC.substring(3,5);
    console.log(hc2);

    
    
   

     if(hc1<12){
         cambiarAM(hc1,hc2);
    }else  if(horaC.length>5){
        alert("hay mas numeros en la hora");
        document.getElementById("resultado6").innerHTML="hay más numeros en la hora";
      
    }
    
    else if(horaC.length<5){
        alert("Le faltan numeros a la hora");
        document.getElementById("resultado6").innerHTML="Le faltan numeros a la hora";
      
    } else if(hc1>12){
        cambiarPM(hc1,hc2);
    }

    if(hc1<0 || hc1>23){
        alert("La hora está mal escrita");
        document.getElementById("resultado6").innerHTML="La hora está mal escrita";
      
    }
    
    if(hc2<1 || hc2>59){
        alert("Los minutos están mal escritos");
        document.getElementById("resultado6").innerHTML="Los minutos estan mal escritos";
      
    }
        
    if(hc1==12){
        alert("la hora es: "+ hc1 +":"+ hc2 + "PM");
    document.getElementById("resultado6").innerHTML=hc1 +":"+ hc2 + "PM";
 
    }
    
    if(hc1==24){
        alert("la hora es: "+ "00" +":"+ hc2 + "AM");
    document.getElementById("resultado6").innerHTML="00" +":"+ hc2 + "AM";
    }
    


   function cambiarAM(hc1,hc2){
    alert("la hora es: "+ hc1 +":"+ hc2 + "AM");
    document.getElementById("resultado6").innerHTML=hc1 +":"+ hc2 + "AM";
   }
   function cambiarPM(hc1,hc2){
    alert("la hora es: "+ (hc1-12) +":"+ hc2 + "PM");
    document.getElementById("resultado6").innerHTML=(hc1-12) +":"+ hc2 + "PM";
   }

}

function fecha7(){

    var fechaP = document.getElementById('fechaP').value;
    var resultado7=document.getElementById("resultado7");
    console.log(fechaP);

    let valores = fechaP.trim().split(" ");
  
    if (valores.length == 3) {

      let dia = valores[0];
      let mes = valores[1];
      let ano = valores[2];
  
      dia = dia.split(",")[0];
  
      mes = mes.toLowerCase();
      let mesesano = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'hunio', 'hulio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  
      let imes = mesesano.indexOf(mes);
  
      if (imes < 0) {
        alert("la fecha no se peude convertir");
        resultado7.innerHTML="la fecha no se peude convertir";
        return;
      }
      mes = imes + 1;
  
      alert(" " + dia+ " "+ mes + " "+ ano);
      resultado7.innerHTML=" " + dia+ " "+ mes + " "+ ano;
  
    } else {
        alert("Ingrese una fecha correcta de la siguiente manera--> 12, Enero 1996 ");
        resultado7.innerHTML="Ingrese una fecha correcta de la siguiente manera--> 12, Enero 1996";
    }

}

function palabra8(){
    var cambioNum=0;
    var i=0;
    var num = [];
    var palabra = document.getElementById("palabraa").value; 
    var resultado = document.getElementById("resultado8");
    palabra = palabra.toLowerCase();
    num = palabra.split(" ");
    console.log(num);
    for (var k of num) {
        if (num[i] == "uno"){
            cambioNum=cambioNum+1;
        }
        else if (num[i] == "dos"){
            cambioNum=cambioNum+2;
        }
        else if (num[i] == "tres"){
            cambioNum=cambioNum+3;
        }
        else if (num[i] == "cuatro"){
            cambioNum=cambioNum+4;
        }
        else if (num[i] == "cinco"){
            cambioNum=cambioNum+5;
        }
        else if (num[i] == "seis"){
            cambioNum=cambioNum+6;
        }
        else if (num[i] == "siete"){
            cambioNum=cambioNum+7;
        }
        else if (num[i] == "ocho"){
            cambioNum=cambioNum+8;
        }
        else if (num[i] == "nueve"){
            cambioNum=cambioNum+9;
        }

        else if (num[i] == "diez"){
            cambioNum=cambioNum+10;
        }
        else if (num[i] == "once"){
            cambioNum=cambioNum+11;
        }
        else if (num[i] == "doce"){
            cambioNum=cambioNum+12;
        }
        else if (num[i] == "trece"){
            cambioNum=cambioNum+13;
        }
        else if (num[i] == "catorce"){
            cambioNum=cambioNum+14;
        }
        else if (num[i] == "quince"){
            cambioNum=cambioNum+15;
        }
        else if (num[i] == "dieciséis"){
            cambioNum=cambioNum+16;
        }
        else if (num[i] == "diecisiete"){
            cambioNum=cambioNum+17;
        }
        else if (num[i] == "dieciocho"){
            cambioNum=cambioNum+10;
        }
        else if (num[i] == "diecinueve"){
            cambioNum=cambioNum+19;
        }
        else if (num[i] == "veinte"){
            cambioNum=cambioNum+20;
        }
        else if (num[i] == "veintiuno"){
            cambioNum=cambioNum+21;
        }
        else if (num[i] == "veintidós"){
            cambioNum=cambioNum+22;
        }
        else if (num[i] == "veintitrés"){
            cambioNum=cambioNum+23;
        }
        else if (num[i] == "veiticuatro"){
            cambioNum=cambioNum+24;
        }
        else if (num[i] == "veinticinco"){
            cambioNum=cambioNum+25;
        }
        else if (num[i] == "veintiséis"){
            cambioNum=cambioNum+26;
        }
        else if (num[i] == "veintisiete"){
            cambioNum=cambioNum+27;
        }
        else if (num[i] == "veintiocho"){
            cambioNum=cambioNum+28;
        }
        else if (num[i] == "veintinueve"){
            cambioNum=cambioNum+29;
        }
        else if (num[i] == "treinta"){
            cambioNum=cambioNum+30;
        }
        else if (num[i] == "cuarenta"){
            cambioNum=cambioNum+40;
        }
        else if (num[i] == "cincuenta"){
            cambioNum=cambioNum+50;
        }
        else if (num[i] == "sesenta"){
            cambioNum=cambioNum+60;
        }
        else if (num[i] == "setenta"){
            cambioNum=cambioNum+70;
        }
        else if (num[i] == "ochenta"){
            cambioNum=cambioNum+80;
        }
        else if (num[i] == "noventa"){
            cambioNum=cambioNum+90;
        }
        else if (num[i] == "cien") {
            cambioNum=100;
        } 
        else if (num[i] == "ciento") {
            cambioNum=100;
        } 
        else if (num[i] == "doscientos"){
            cambioNum=200;
        }
        else if (num[i] == "trescientos"){
            cambioNum=300;
        }
        else if (num[i] == "cuatrocientos"){
            cambioNum=400;
        }
        else if (num[i] == "quinientos"){
            cambioNum=500;
        }
        else if (num[i] == "seiscientos"){
            cambioNum=600;
        }
        else if (num[i] == "setecientos"){
            cambioNum=700;
        }
        else if (num[i] == "ochocientos"){
            cambioNum=800;
        }
        else if (num[i] == "novecientos"){
            cambioNum=900;
        }
        
                        
        i++;
        console.log(cambioNum);
        
    }
    resultado.innerHTML=" "+ cambioNum;


}


function circulo9(){
var radio = 0;

var pi = 3.14159265359;

var h24 = 0;

var texto = document.getElementById("resultado9");


    radio = parseInt(document.getElementById("radio9").value);
    var diametro = radio * 2;
    var circunferencia = (diametro * pi);
    console.log(circunferencia, diametro);

    alert("el diametro es "+ diametro +" y la circunferencia es "+ circunferencia);
    texto.innerHTML= "el diametro es " + diametro + " y la circunferencia es "+ circunferencia;

    texto.style.display = "inline";

}

function romano10(){

    var respuesta = document.getElementById("resultado10");


    var numRomano = document.getElementById("romano").value;


    if (!+numRomano)
    return false;
var digits = String(+numRomano).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
           "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
           "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman = "",
    i = 3;
while (i--)
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
console.log( Array(+digits.join("") + 1).join("M") + roman);
respuesta.innerHTML= Array(+digits.join("") + 1).join("M") + roman;
}

function redondear11(){


    var digito1 = 0;
var digito2 = 0;
var digito3 = 0;
var digito4 = 0;
var texto = document.getElementById("resultado11");

var total = " ";



    digito1 = document.getElementById("digito1").value;
    digito2 = document.getElementById("digito2").value;
    digito3 = document.getElementById("digito3").value;
    digito4 = document.getElementById("digito4").value;

    total = parseInt(digito3 + digito4);

    if (total <= 50) {
        
        //var total2 = parseInt(digito3 + digito4);
        resultado = digito1 + digito2;
        var cambio = parseInt(digito2) - 1;
        var decena = parseInt(digito3) - parseInt(digito3);
        var unidades = parseInt(digito4) - parseInt(digito4);
        // rasultado2= total - total;
        alert("el numero redondeado es "+ digito1 + cambio + decena + unidades );
    texto.innerHTML= " "+ digito1 + cambio + decena + unidades ;

        console.log(digito1, cambio, decena, unidades);
    }

    if (total >= 51) {
        // resultado = parseInt(digito1, digito2, digito3 + digito4);
        var cambio = parseInt(digito2) + 1;
        var decena = parseInt(digito3) - parseInt(digito3)
        var unidades = parseInt(digito4) - parseInt(digito4)
        console.log(digito1, cambio, decena, unidades);
        alert("el numero redondeado es "+ digito1 + cambio + decena + unidades );
        texto.innerHTML= " "+ digito1 + cambio + decena + unidades ;
    
    }

    if(total === 50){
        console.log(digito1, digito2, digito3, digito4);
        alert("el numero redondeado es "+ digito1 + digito2 + digito3 + digito4 );
        texto.innerHTML= " "+ digito1 + digito2 + digito3 + digito4  ;
    
    }

    //console.log(total);
    texto.style.display = "inline";
}

function edad12(){

var texto = document.getElementById("resultado12");

var anoActual = 2019;

dia = parseInt(document.getElementById("dia").value);
mes = parseInt(document.getElementById("mes").value);
ano = parseInt(document.getElementById("año").value);

if(ano >= anoActual && mes <=12){
    console.log(mes, dia);
    alert("La edad del BEBE es "+ mes + "meses y " + dia +"días");
    texto.innerHTML= "La edad del BEBE es "+ mes + " meses y " + dia +" días" ;
}

if(ano <= anoActual && mes ){
    var edad = anoActual -ano;
    console.log(edad, mes, dia);
    alert("La edad de la persona es "+ edad + " años");
    texto.innerHTML= " "+ edad + " años";
}

if(ano > anoActual){
    console.log("Error");
    alert("Error, se ha ingresado un año mayor al actual ");
    texto.innerHTML= " Error, se ha ingresado un año mayor al actual  " ;
}

texto.style.display = "inline";

}

function ecuaciones13(){


    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var f = 0;
    var e = 0;
    var texto = document.getElementById("resultado13");
    
        a = parseInt(document.getElementById("a").value);
        b = parseInt(document.getElementById("b").value);
        c = parseInt(document.getElementById("c").value);
        d = parseInt(document.getElementById("d").value);
        e = parseInt(document.getElementById("e").value);
        f = parseInt(document.getElementById("f").value);
        
        var x = ((c * e) - (b*f)) / ((a*e)-(b*d));
        var y = ((a * f) - (c*d)) / ((a*e)-(b*d));
        console.log(x, y);
        texto.style.display = "inline";

        alert("El resultado de las ecuaciones es x="+ x + " y="+ y);
        texto.innerHTML= " x="+ x + " y="+y;
    
    

}


function bisiesto14(){

    
var texto = document.getElementById("resultado14");

var ano = 0;


    ano = parseInt(document.getElementById("hora").value);
    
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

function numDias(){


    var mes = 0;
    var ano = 0;
    
    var texto = document.getElementById("resultado15");
    
        mes = parseInt(document.getElementById("mes15").value);
        console.log(mes);
        ano = parseInt(document.getElementById("ano15").value);
        console.log(ano);
        switch(mes){
            case 1 :
                console.log("El mes tiene 31 días");
                alert("El mes "+ mes +" tiene 31 días");
            texto.innerHTML= "El mes "+ mes +" tiene 31 días";
            break;
            case 2 :

            if(ano % 4 == 0){
                if(ano % 100 == 0 && ano % 400 == 0) {
                    console.log("El mes tiene 29 días");
                    alert("El mes "+ mes +" tiene 29 días");
            texto.innerHTML= "El mes "+ mes +" tiene29 días";
                }else{
                    console.log("El mes tiene 29 días");
                    alert("El mes "+ mes +" tiene 29 días");
            texto.innerHTML= "El mes "+ mes +" tiene 29 días";
                }
        
            };
            break;
            case 3 :
                console.log("El mes tiene 31 días");
                alert("El mes "+ mes +" tiene 31 días");
            texto.innerHTML= "El mes "+ mes +" tiene 31 días";
            break;
            case 4 :
                console.log("El mes tiene 30 días");
                alert("El mes "+ mes +" tiene 30 días");
            texto.innerHTML= "El mes "+ mes +" tiene 30 días";
            break;
            case 5 :
                console.log("El mes tiene 31 días");
                alert("El mes "+ mes +" tiene 31 días");
            texto.innerHTML= "El mes "+ mes +" tiene 31 días";
            break;
            case 6 :
                console.log("El mes tiene 30 días");
                alert("El mes "+ mes +" tiene 30 días");
                texto.innerHTML= "El mes "+ mes +" tiene 30 días";
            break;
            case 7 :
                console.log("El mes tiene 31 días");
                alert("El mes "+ mes +" tiene 31 días");
            texto.innerHTML= "El mes "+ mes +" tiene 31 días";
            break;
            case 8 :
                console.log("El mes tiene 31 días");
                alert("El mes "+ mes +" tiene 31 días");
                texto.innerHTML= "El mes "+ mes +" tiene 31 días";
            break;
            case 9 :
                console.log("El mes tiene 30 días");
                alert("El mes "+ mes +" tiene 30 días");
                texto.innerHTML= "El mes "+ mes +" tiene 30 días";
            break;
            case 10 :
                console.log("El mes tiene 31 días");
                alert("El mes "+ mes +" tiene 31 días");
            texto.innerHTML= "El mes "+ mes +" tiene 31 días";
            break;
            case 11:
                console.log("El mes tiene 30 días");
                alert("El mes "+ mes +" tiene 30 días");
                texto.innerHTML= "El mes "+ mes +" tiene 30 días";
            break;
            case 12 :
                console.log("El mes tiene 31 días");
                alert("El mes "+ mes +" tiene 31 días");
            texto.innerHTML= "El mes "+ mes +" tiene 31 días";
            break;
    
            
        }
        
        texto.style.display = "inline";

}
f
function salario16(){

    
var texto = document.getElementById("resultado16");

var precioHora = 3500;
var totalpaga = 0;
var impuesto = 0;

    hora = parseInt(document.getElementById("hora16").value);
    if(hora <= 38){
        totalpaga = hora * precioHora;
        console.log("precio normalito salario", totalpaga);
        if(totalpaga > 50000 ){
            impuesto = totalpaga * 0.1;
            var total = totalpaga - impuesto;
            console.log(total);
            alert("El  salario del trabajor es "+ total);
            texto.innerHTML= total;
        }
        
    }else{
        totalpaga = (hora * precioHora) / 0.5;
        console.log("precio horas extra trabajador", totalpaga);
        if(totalpaga > 50000 ){
            impuesto = totalpaga * 0.1;
            var total = totalpaga - impuesto;
            console.log(total);
            alert("El  salario del trabajor es "+ total);
            texto.innerHTML= total;
        }
    }
    
   
    texto.style.display = "inline";

}

function billetes17(){
    
var dinero = [20000,10000,5000,2000,1000,500,200,100,50];
var cambio=[0,0,0,0,0,0,0,0,0];

billete1 = document.getElementById("billete17").value;
resultadoDinero=document.getElementById("resultado17");

    const final = calcular(billete1);

   

function calcular(cDinero) {


    for (var i = 0; i < dinero.length; i++) {

      if(cDinero>=dinero[i])
      {
          cambio[i]=parseInt(cDinero/dinero[i]);

          cDinero=(cDinero-(cambio[i]*dinero[i])).toFixed(2);
      }

    }

    for(i=0;i<dinero.length;i++){

        if(dinero[i]>0)
        {
            if(dinero[i]>=500){
                if(cambio[i]>0){
                    if(cambio[i]==1){
                        console.log("Sería "+ cambio[i]+" billete de "+ dinero[i]+" mil pesos, ");
                        resultadoDinero.innerHTML= resultadoDinero.innerHTML+"Sería "+ cambio[i]+" billete de "+ dinero[i]+" mil pesos" +'<br> <br>' ;
           
                    }else{
                        console.log("Serían "+ cambio[i]+" billetes de "+ dinero[i]+" mil pesos, ");
                        resultadoDinero.innerHTML= resultadoDinero.innerHTML+"Serían "+ cambio[i]+" billetes de "+ dinero[i]+" mil pesos" +'<br> <br>' ;
           
                    }
                  
                        }

                
               
            }else{
                if(cambio[i]>0){
                    if(cambio[i]==1){
                        console.log("Sería "+ cambio[i]+" moneda de "+ dinero[i]+" mil pesos, ");
                        resultadoDinero.innerHTML= resultadoDinero.innerHTML+"Sería "+ cambio[i]+" moneda de "+ dinero[i]+" pesos" +'<br> <br>' ;
           
                    }else{
                        console.log("Serían "+ cambio[i]+" monedas de "+ dinero[i]+" pesos, ");
                        resultadoDinero.innerHTML=resultadoDinero.innerHTML+ "Serían "+ cambio[i]+" monedas de "+ dinero[i]+" pesos"+'<br> <br>' ;
                       
                    }
                 }
                
            }

        }
         

    }

  


}

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

