/* Definición de funciones

Una función es un bloque de código que se ejecuta cada que yo lo mande a llamra, va  a contener distintas instrucciones con base en lo que yo necesite 

*/


/*function recomendacion() {
let clima = prompt ("Que tal el clima el dia de hoy?");
if (clima == "soleado") {
    alert ("Usa bloqueador solar");
} else {
    alert ("ponte sueter");
}

}

recomendacion();
recomendacion();
recomendacion();*/

/*function saludar() {
    console.log("Hola desde una función");
}

saludar();
saludar();
saludar();
saludar();


function carritoMensaje () {
     
    let carritoMensaje = `Hola ${nombre} tienes ${cantidadProductos} productos en tu carrito, procedemos al pago?`
    alert(carritoMensaje);
}*/

/*let nombre;
let cantidadProductos;
carritoMensaje("Brandon", 5);
carritoMensaje();
carritoMensaje();
carritoMensaje();*/


function carro(nombre, cantidadProductos) {
   
    let carritoMensaje = `Hola ${nombre} tienes ${cantidadProductos} productos en tu carrito, procedemos al pago?`
    alert(carritoMensaje);
  
}
let nombre = prompt("Ingresa tu nombre");
let cantidadProductos = prompt("Ingresa La catida de Productos");
carro(nombre, cantidadProductos)

//function mensajeCarrito


*Return
La palabra reservada return nos indica que estamos devolviendo un tipo de dato al ejecutar nuestra funcion 
*/

// function sumar (a, b){
    
//     console.log("El resultado de la suma es: ");
//     return a + b;
// }

// let suma = sumar (15, 98);
// console.log(suma);

// let suma1 = sumar(74, 52);
// console.log(suma1);

function bienvenidx(nombre){
    return "Hola, " + nombre + " Ya eres cliente prenium";
}

let aviso = bienvenidx("Saul");
console.log(aviso);

let num1 = 15;
let num2 = 25;
let suma2 = num1 + num2;
console.log("El resultado es :" + suma2);

function suma(num1, num2){
    let suma3 = num1 + num2;
    return suma3
}

let resultado = suma(54, 89);
console.log(resultado);

//Funciones flecha, su sintaxis es mas concisa al no tener que utilizar la palabra reservada function, return y si tengo solo un parametro los parentesis ya no son necesarios igual que las llaves 

const saludo = nombre => console.log("Hola " + nombre);

saludo("Felipe");

const multiplicar = (c, d) => c * d;
console.log(multiplicar(12,36));

/*Hoisting
Es un comportamiento dentro de js que hace que en la declaracion de variables y funciones se eleven al inicio del contexto en el que estan definidas 
*/

function carritoMensaje () {
     
    let carritoMensaje = `Hola ${nombre} tienes ${cantidadProductos} productos en tu carrito, procedemos al pago?`
    alert(carritoMensaje);
}*/

/*let nombre;
let cantidadProductos;
carritoMensaje("Brandon", 5);
carritoMensaje();
carritoMensaje();
carritoMensaje();*/


// function carro(nombre, cantidadProductos) {

//     let carritoMensaje = `Hola ${nombre} tienes ${cantidadProductos} productos en tu carrito, procedemos al pago?`
//     alert(carritoMensaje);

// }
// let nombre = prompt("Ingresa tu nombre");
// let cantidadProductos = prompt("Ingresa La catida de Productos");
// carro(nombre, cantidadProductos)

//Funciones anonimas 

// let carritoCompra = function(){
//     let nombre = prompt ("Ingresa tu nombre");
//     let productos = prompt("Ingresa la cantidad de productos");

//     let mensaje = `Hola ${nombre}, tienes ${productos} productos en tu carrito, procedemos al pago?`;
//     alert(mensaje);
// }

// carritoCompra();