/*
var nombre="alberto maneiro";

var altura=185;

var concat=nombre + " " + altura;
*/
/*
var datos=document.getElementById("datos");
datos.innerHTML=`
    <h1>Caja datos</h1>
    <h2> mi nombre es : ${nombre}</h2>
    <h2>mido : ${altura}</h2>
  `  ;

*/
/*
  if(altura=>185){
    datos.innerHTML +=`<h1> eres una persona VERGUDA</h1>`
    
  }else{
    datos.innerHTML +=`<h1> eres una persona baja</h1>`
  }

*/
   function Mostrando(nombre,altura){
    var datos=`
    <h1>Caja datos</h1>
    <h2> mi nombre es : ${nombre}</h2>
    <h2>mido : ${altura}</h2>
  `  ;
    return datos;

  }

  function imprimir(){
    var datos=document.getElementById("datos");
    datos.innerHTML= Mostrando("alberto", 185)

  }


  imprimir();
  
  var nombres= ['victor','antonio','joaquin'];

for(i=0 ; i<nombres.length; i++){
  document.write(nombres[i] + " <br/>");
  
}


nombres.forEach( (nombre) =>{
 document.write(nombre + " <br/>");

  
});


/*
 objetos JSON
*/


var coche={
modelo:' merces clase A',
 maxima : 500,
 antiguedad:2020,
  mostrarDatos(){
      console.log( this.maxima, this.antigues, this.moodelo);



  },
  propiedad:"valor aleatorio"
}

document.write("<h1>"+ coche.modelo + "<h1")


coche.mostrarDatos();

// una promesa es objeto usado en peticiones asyncronas o peticiones que tarda un rato la promesa su valor puede estar disponible ahora, en el futuro o nunca
// la diferencia entre let y var es el alcance de la variable en el codigo var tiene mas
var saludar= new Promise((resolve,reject)=>{

  setTimeout(()=>{
    let saludo="hola muy buenas a todos españa";

    if(saludo){
      resolve(saludo);

    }else{
      reject("no hay saludo disponible");
    }
  },2000);

});

saludar.then(result => {
  alert(result);
})
.catch(err => {
  alert(err);
});