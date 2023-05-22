//ejercicios trasladados de pseint a java
const leer = requiere ("prompt-sync")()
escribir = console
//class: Contenedor de funciones (metodos)
class secuenial{
//EJERICICIO 1 RESOLUCION FORMULA GENERAL
resolucionformulageneral(){
    console.log	("EJERICICIO 1:resolucion FORMULA GENERAL")	
        //DECLARARMOS LAS VARIABLES
        let a, b, c, resultado1
        a=0, b=0, c=0 
        //INGRESE LOS DATOS
        a=Leer ("Ingrese valor de A:")
        b=Leer ("Ingrese valor de B:")
        c=Leer ("Ingrese valor de C:")
        //PROCESO
        resultado1= (-b + Math.sqrt(b**2+(4*a*c)))/(2*a)
        console.log ("El resultado de es: ", resultado1)
        
    }    
    

// ejercicio 2: operaciones logicas
operadoreslogicos(){;
     console.log ('ejercicio 2 operadoreslogicos');
         let a, b, c ;
         a=0, b=0, c=0
         let resultado;
         a <- 10;
         b <- 15;
         c <- 20;
         resultado <- ((a<b) && (b<c));
         console.log ("resultado", resultado)
    	} 
    }
    const secuen2 = new secuencial()
    secuen2.operadoreslogicos

//ejercicio 3: suma de numeros
semaNumeros(){
	console.log ('ejercicio 3');
	  let b;
	  b=leer('digite un numero:');
      a <- 10;
	  resultado <- a+b;
      console.log ('el resultadoes:', resultado);
    }
    
//ejercicio 4: resolucion de problemas 
resolucion(){
   console.log ("ejercicio 4");
     let a,b,c, resltado;
     a=0, b=0, c=0 ;
     a,b,c= leer("digite el valor de a,b,c");
     
     resultado <- (-b + rc(b^2 - 4*a*c))/ (2*a);
     console.log ("el resultado es:",resultado);
    }

// ejercicio 5: sumana de nuemros 

suma_n (){;
  console.log ('ejercicio 5');
      let a, b, c, resultado;
      
      a <- 10;
      b <- 20;
      c=leer ('digite un numero: ');
      //resolucion
      resultado <- a+b+c;
      console-log ('el resultado es: ', resultado);
    }  


//ejercicio 6: calcular la catidad de segundos que estan incluidos  en el 
// numero de horas, minutos, segundos ingresados por el usuario
cantidad_seg(){
    //definimos cada variable que desconocemos
    console.log ('ejercicio 6');
       let horas, minutos, seg;
      horas_seg, minutos_seg, total_seg;
      horas=leer ('digite las horas: ');
      
      minutos=leer (' digite minutos: ');
      
      seg=leer (' digite seg: ');
      
      // calcular el equivalente en segundos
      horas_seg <- horas*3600;
      minutos_seg <- minutos*60;
      total_seg <- horas_seg+minutos_seg+seg;
      console.log (' los segundos equivalentes son; ', total_seg);
  

      //ejercicio 7: sacar el area y la longitud de una circunferencia
 area_long();
      console.log ('ejercicio 6');
            let radio, are, long;
            radio=leer ('digite el valor del radio:');
            //resolucion
            area <- 2*pi*radio;
            long <- 2*pi*radio;
            crossOriginIsolated.log ('el area de la circunferen;cia es:', area);
            console.log ('la long es:', long);
  
	
// ejecicio 8: porcentaje de hombres y mujeres 
porcentajeH_M
	console.log ('ejercicio 8');
	  let numH, numM ;
	    total_estudiantes;
	    porcentajeH, porcentajeM;
	    numH=leer ('digite numero de hombres:');
	    
	    numM=leer ('digite numero de mujeres:');
	    //resolucion
	    total_estudiantes <- numH+numM;
	    porcentajeH <- numH/total_estudiantes*100;
	    porcentajeM <- numM/total_estudiantes*100;
	    console.log ('elporcentaje de hombres es:'(), porcentajeH, '%');
	    console.log ('elporcentaje de mujeres:'(), porcentajeM, '%');


// esjercicios 9: un  alumno desea saber cual sera  su calificacion final  en materia  de algoritmos.
// dicha calificacion se  compone de los siguientes porcentajes:
// 55  MOD  del promedio de sus tres calificaciones  parciales 
// 30  MOD  de la calificacion del examen final
// 15  MOD  de la calificacion de un trabajo final 
calificacionFinal
	console.log ('ejercicio 9');
	   let parcial1, parcial2, parcial3;
	   let promedio_P, notasparcial;
	   let examen_Final, notaexamen;
	   let trabajo_Final, NOTATrabajo, nota_final;
       parcial1, parcial2, parcial3=leer (' digitelas tres notas de los parciales');
	   
	   promedio_P <- (parcial1+parcial2+parcial3)/3;
	   notasparcial <- promedioP*0.55;
	   examen_Final=leer ('digite la nota del examen final: ');
	
	   notaexamen <- examen_Final*0.3;
	   NOTATrabajo=leer (' digite nota del trabajo final: ');
	   
	   NOTATrabajo <- NOTATrabajo*0.15;
	   nota_final <- notas_parcial+notaexamen+NOTATrabajo;
	  console,log (' su calificacion final es: ', nota_final);

//ejercicio 10
descuento15
      console.log ( 'ejercicio 10');
          let total_compra, descuento, precioFinal;
          total_compra=leer ('digitel total de compra:');
          //resolucion
          descuento <- total_compra*0.15;
          precio_final <- total_ccompra-descuento;
          console,log ('el precio a pagar es:', precioFinal9);
  
//ejecicio 11  
notafinal()
      console.log ('ejercicio 11');
          let  parcial_1, parcial_2, parcial_3
           //declarar las variables 
           parcial_1=0, parcial_2=0, parcial_3=0

           let promedioP, notas_parcial
           let trabajoFinal,notaTrabajo
           promedioP=0, notas_parcial=0, trabajoFinal=0, notaTrabajo=0

           let notaExamen, examenFinal;
           notaExamen=0, examenFinal=0

           console,lig (nota_final);
           parcial_1,parcial_2,parcial_3=leer('digite las tres tres notas de los parciales ');
          //resolucion
           promedioP <- (parcial1+parcial2+parcial3)/3;
           notas_parcial <- promedioP*0.55;
           notaTrabajo=leer ('digite nota del trabajo final');
           
           notaTrabajo <- notaTrabajo*0.15;
           nota_final <- notas_parciales+notaExamen+nota_final;
           console,log (' su calificacion final es: ', nota_final);


//ejercicio 12
// ingrese un numero entero y reportar si es par o impar 
par_impar
    console.log('ejercicio 12');
     //declarar la variable
        let num;
        a=0
        //ingreso de datos
      num=leer ('digite un numero');
      //proceso
    if(num % 2 ){
        console.log (' el numero', num, ' es par ');
    }
    else{
        console.log (' el numero ', num, ' es impar');
    }

//ejercicio 13
// verificar si el estudiante aprobo o reprobo (si tiene>=70 ) aproeba si no, reprueba
aprobado_reprobado(){
    console.log ('ejercicio 13');
    let nota1, nota2, nota3, promedio;
    nota1, nota2, nota3=leer('digite las tres notas diferentes:');
    promedio <- (nota1+nota2+nota3)/3;
  if (promedio>=70) {
      console.log ('a aprobadocon:', promedio);
  }
      
  else{
    console.log ('a reprobado con:', promedio);
  }

} 
	 
//ejercicio 14  
descuento20(){
    console.log ('ejercicio 14');
	  let compra, descuento, precio_final;
	  compra=leer('digite la cantidad a pagar');
	
	if (compra>100){
        descuento <- compras*0.2;
    }

		
	else{
        descuento <- 0;
    }
	precio_final <- compra-descuento;
	console.log ('su precio a pagares:', precio_final);
}
	
//ejercicio 15
pagark(){
    console.log (' ejercicio 15');
	   let precioK, kilos, precioI;
	   let descuento, precioFinal;
	   precioK=leer('cuanto cuesta el kilo de manzanas');
	   kilos=leer('cuantos kilos de manzana a comprado');
	   //resolucion
       precioI <- precioK*kilos;
	if (kilos>0 && kilos<=2) {
        descuento <- 0;
    }
	else{
        if (kilos>2.01 && kilos<=5) {
            descuento <- precioI*0.1;
        }
		else{
            if (kilos>=5.01 && kilos<=10) {
                descuento <- precioI*0.15;
            }
			else{
                descuento <- 0.2;
            }
		}
	}
	precioFinal <- precioI-descuento;
	console,log ('el precio a pagar es: ', precioFinal);

}

//ejercicio 16
// leer 2 numeros; si son iguales que los multiplique, si el
// primero es mayor que el segundo que los reste y si no que los sume.
operacionesde_variantes(){
	console.log('ejercicio 16');
	 let num1, num2, resultado;
	 m1, numnu2=leer('digite dos numeros: ');
	if (num1=num2){
        // si son iguales se multiplica
		resultado <- num1*num2;
    }
	else{
        if (num1>num2) {
            // si el primero es mayor  los restamos 
        resultado <- num1-num2;
        }
    
		if (num1>num2) {
            // si el primero es mayor  los restamos 
			resultado <- num1-num2;
        }
		else {
            // si no se cumple lo anterior entonces se suman 
			resultado <- num1+num2;
        }	
	}
	console.log (' el resultado es: ', resultado);
}

//ejercicio 17
num_mayor(){
    console.log ('ejercicio 17');
	 let num1, num2, num3;
     num=0,num=0,num=0
	 num1, num2, num3=leer('digite los tres numeros diferentes:');
	
	if (num1>num2 && num1>num3){
        console,log ('el mayor es:', num1);
    }
	else{
       if (num2>num1 && num2>num) {
         console.log ('el mayor es:', num2);
       }
	   else{
         console.log ('el mayor es:', num3);
       }
		
	}
}

//ejercicio 18
// elaborar un programa que  muestre los dias de la semana 
// cuando ingrese los siete primeros numeros 
diasSemana(){
	console.log('ejercicio 18');
	 let dia=0
	 dia=leer("ingrese el numero del dia")
     dia= perseInt(dia)
     switch (dia){
    case 1:
      console.log("lunes")
      break
    case 2:
        console.log("martes")
        break
    case 3:
        console.log("miercoles")
        break
    case 4:
       console.log("jueves")
       break
    case 5:
        console.log("viernes")
        break
    case 6:
      console.log("sabado")
      break
    case 7:
     console.log("domingo")
     break
    default:
     console.log(error)
    }
}

//ejercicio 19
bodas(){
   console.log ('ejercicio 19');
	let decada=0
	decada=leer ('digite una decada');
	dia= perseInt(decada)
    switch (decada){
	case 10:
		console.log ('boda de hojalata');
        break
	case 20:
	   console.log ('boda de porcelana');
       break
	case 30:
       console.log('boda de perla');
       break
    case 40:
		console.log('bodas de rubi');
        break
	case 50:
		console.log ('bodas de oro');
        break
	case 60:
	   console.log ('bodas diamante');
       break
	default:
	   console.log ('error');
       break
    }
}

//ejercicio 20
opcionesOperaciones
	console-log ('ejercicio 20');
	let opcion
    console.log ('menu');
	console.log ('1 elevar un numero a la potencia x');
	console,log ('2 sacar la raiz cuadrada de un numero');
	console.log ('digite una opcion');
	console.log ('3 salir');
    opcion:leer
	switch (opciones) {


	    case 1:
			let Num, pot, Resultado;
			Num:leer ('digite num');
			pot:leer ('digite la potencia ');
			console.log ('el resultado es:', resultado);
		case 2:
			let num, resultado;
			num:leer ('digite un numero');
			resultado <- rc(num);
			console.log ('el resultado es:', resultado);
		case 3:
		 default
		 console.log('error');
	}
}

//ejercicio 21
// se desea calcular independientemente la suma de los numeros 
//pares e impares comprendidos entres 1 y 50
numPares_impares(){
	console.log ('ejercicio 21');
	  //DECLARARMOS LAS VARIABLES
      let par, impar
      par=0, impar=0
      //INGRESE LOS DATOS
      //PROCESO
      for (let n=2;n<=49;n++){
          if (n%2==0){
              par=par+n;
          }else{
              impar=impar+n;
          }
      }
      console.log ("Suma de los pares entre 1 y 50 es:", par)
      console.log ("Suma de impares entre 1 y 50 es:",impar)
}
	

//ejercicio 22
ciclos_para(){
	console.log ("ejercicio 22");
	let num,n;
	let conteo_positivo, conteo_negativo,conteo_neutro;
	
	conteo_positivo <- 0;
	conteo_negativo <- 0;
	conteo_neutro<- 0;
	for(n=1; n=10; n++) {
		num =leer ("digite un numero: ");
		
	}
	if (num=0) {
		conteo_neutro <- conteo_neutro;
    }    
	else{
		if (num>0){
			conteo_positivo <- conteo_positivo+1;
        }
        else{    
		
			conteo_egativo <- conteo_negativo + 1;
        }    
	}

	consolelog ("la cantidad positivo es:", conteo_positivo);
	console.log ("la cantidad de negativos es:",conteo_negativo);
    console.log ("la cantidad de neutro es:",conteo_neutro);
}

//ejercicio 23
// suponga que se tiene un conjunto de calificaciones de un grupo 
//de 10 alumnos. realizar un algoritmo para calcular la calificacion promedio y
//la calificacion mas baja de todo el grupo.
calificacion_masBaja(){
	console,log ("ejercicio 24");
	
	let calificacion_promedio,calificacionBaja;
	let calificacion,suma;
	let n;
	
	suma <- 0;
	calificacionBaja <- 99999;
	 
	for (let n=1; n=10; n++) {
		 console.log  (" digite una calificacion: ");
		 calificacio=leer;
		//suma de las calificaciones 
		suma <- suma + calificacion;
		if (calificacion < calificacionBaja) {
			calificacionBaja <- calificacion;
		}
	}
	calificacion_promedio <- suma/10
	console.log (" la calificacion promedio es: ", calificacion_promedio);
	console.log (" calificacion mas baja es: ", calificacionBaja);

}

//ejercicio 25
//calcular la suma de los "n" primeros numeros
sum_primerosNum(){
	console.log ('ejercicio 25');
		let N, suma,i;
		N=leer ('digite la cantidad de numeros a sumarse: ') ; 
		 
		suma  <- 0 ;
		
		for (i=1;i= N; i++) {
			suma <- suma + i ;		
		}
		console,log (" la suma es: ", suma ); 
	
}

//ejercicio 26
suma_elementos (){
	console.log ("ejercicio 26");
	let lementos;
	let  i,suma ;
	n-elementos=leer("digite la cantidad de elementos a sumar:");
	while (i<=n-elementos){
		i <- 1;
		suma <- suma+i^2;
	}
	console.log ("la suma es: ",suma);
}


const secuen1 = new secuenial()
secuen1.resolucionformulageneral()
secuen1.operadoreslogicos()  
secuen1.semaNumeros()
secuen1.suma_n() 
secuen1.resolucion()
secuen1.cantidad_seg()
secuen1.area_long()
secuen1.porcentajeH_M()
secuen1.calificacionFinal()
secuen1.nota_final()
secuen1.par_impar()
secuen1.aprobado_reprobado()
secuen1.descuento20()
secuen1.pagark()
secuen1.operacionesde_variantes()
secuen1.num_mayor()
secuen1.diasSemana()
secuen1.bodas()
secuen1.opcionesOperaciones()
secuen1.numPares_impares()
secuen1.calificacion_masBaja()
secuen1.sum_primerosNum()
secuen1,suma_elementos ()