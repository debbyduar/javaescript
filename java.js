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
semaNumeros(){;
	console.log ('ejercicio 3');
	  a <- 10;
	  console.log ('digite un numero:');
	  let b; 
	  resultado <- a+b;
      console.log ('el resultadoes:', resultado);
    }
    
//ejercicio 4: resolucion de problemas 
resolucion(){
   console.log ("ejercicio 4");
     a,b,c, resltado;
     a=0, b=0, c=0 ;
     console.log  ("digite el valor de a,b,c");
     let a,b,c;
     resultado <- (-b + rc(b^2 - 4*a*c))/ (2*a);
     console.log ("el resultado es:",resultado);
    }

// ejercicio 5: sumana de nuemros 

suma_n (){;
  console.log ('ejercicio 5');
      a, b, c, resultado;
      
      a <- 10;
      b <- 20;
      console.log ('digite un numero: ');
      let c;
      resultado <- a+b+c;
      console-log ('el resultado es: ', resultado);
    }  


//ejercicio 6: calcular la catidad de segundos que estan incluidos  en el 
// numero de horas, minutos, segundos ingresados por el usuario
cantidad_seg(){
    //definimos cada variable que desconocemos
    console.log ('ejercicio 6');
       horas, minutos, seg;
      horas_seg, minutos_seg, total_seg;
      console.log ('digite las horas: ');
      let horas;
      console.log (' digite minutos: ');
      let minutos;
      console.log (' digite seg: ');
      let seg;
      // calcular el equivalente en segundos
      horas_seg <- horas*3600;
      minutos_seg <- minutos*60;
      total_seg <- horas_seg+minutos_seg+seg;
      console.log (' los segundos equivalentes son; ', total_seg;
  

      //ejercicio 7: sacar el area y la longitud de una circunferencia
 area_long();
      console.log ('ejercicio 6');
            radio, are, long;
            console.log ('digite el valor del radio:');
            let radio;
            area <- 2*pi*radio;
            long <- 2*pi*radio;
            crossOriginIsolated.log ('el area de la circunferen;cia es:', area);
            console.log ('la long es:', long);
  
	
// ejecicio 8: porcentaje de hombres y mujeres 
porcentajeH_M
	console.log ('ejercicio 8');
	    numH, numM ;
	    total_estudiantes;
	    porcentajeH, porcentajeM;
	    console.log ('digite numero de hombres:');
	    let numH;
	    console,log ('digite numero de mujeres:');
	    let numM;
	    total_estudiantes <- numH+numM;
	    porcentajeH <- numH/total_estudiantes*100;
	    porcentajeM <- numM/total_estudiantes*100;
	    console.log ('elporcentaje de hombres es:'(), porcentajeH, '%';
	    console.log ('elporcentaje de mujeres:'(), porcentajeM, '%';


// esjercicios 9: un  alumno desea saber cual sera  su calificacion final  en materia  de algoritmos.
// dicha calificacion se  compone de los siguientes porcentajes:
// 55  MOD  del promedio de sus tres calificaciones  parciales 
// 30  MOD  de la calificacion del examen final
// 15  MOD  de la calificacion de un trabajo final 
calificacionFinal
	console.log ('ejercicio 9');
	   parcial1, parcial2, parcial3;
	   promedioP, notas_parcial;
	   examenFinal, notaExamen;
	   trabajoFinal, notaTrabajo;
	   nota_final;
       console.log (' digitelas tres notas de los parciales');
	   let parcial1, parcial2, parcial3;
	   promedioP <- (parcial1+parcial2+parcial3)/3;
	   notas_parcial <- promedioP*0.55;
	   console.log ('digite la nota del examen final: ');
	   examenFinal;
	   notaExamen <- examenFinal*0.3;
	   console.log (' digite nota del trabajo final: ');
	   let notaTrabajo;
	   notaTrabajo <- notaTrabajo*0.15;
	   nota_final <- notas_parcial+notaExamen+notaTrabajo;
	  console,log (' su calificacion final es: ', nota_final);


descuento15
      console.log ( 'ejercicio 10');
          total_compra, descuento, precioFinal;
          console.log  ('digitel total de compra:');
           total_compra;
          descuento <- total_compra*0.15;
          precio_final <- total_ccompra-descuento;
          console,log ('el precio a pagar es:', precioFinal9);
  
  
notafinal()
      console.log ('ejercicio 11');
           parcial1, parcial2, parcial3;
           promedioP, notas_parcial;
           trabajoFinal, notaTrabajo;
           notaExamen, examenFinal;
           console,lig nota_final;
           console.log ('digite las tres tres notas de los parciales ');
           parcial1, parcial2, parcial3;
           promedioP <- (parcial1+parcial2+parcial3)/3;
           notas_parcial <- promedioP*0.55;
           console,lig ('digite nota del trabajo final');
           notaTrabajo;
           notaTrabajo <- notaTrabajo*0.15;
           nota_final <- notas_parciales+notaExamen+nota_final;
           console,log (' su calificacion final es: ', nota_final);
  

   









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
