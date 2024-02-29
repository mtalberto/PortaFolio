class Coche{
    constructor(modelo,velocidad,antiguedad) {
        /* atributos */
        this.modelo = modelo;
        this.velocidad= velocidad;
        this.antiguedad=antiguedad;

    }
    /* metodos */
    aumentarVelocidad(){
        this.velocidad+=1;
    }
    reducirVelocidad(){
        this.velocidad-=1;
    }

}

var coche1 = new Coche("BWM",200,5);
var coche2=new Coche("peugeot",200,1);
var coche3= new Coche("citroen",400,2);

coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

console.log(coche1);


document.write("<h1>"+coche1.velocidad+ "<h1>");
