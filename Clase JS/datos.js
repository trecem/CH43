// const nombre = "Fer";
// nombre = "Luisa";
// console.log(nombre);

// Encasillamiento es el proceso de conversión automática o implícita de valores de un tipo de dato a otro

let edad = 32;
let primaveras = "32";
let bendis = 2;

//coerción implícita
let operacion = edad + Number(primaveras);
console.log(operacion);

//Múltiplea variables 
//let nombre1 = "Dani, nombre2 = "Felipe", nombre3 = "Fer";

//nombre1= "Dani";
// nombre2="Felipe";
// nombre2 = "Josue";

let nombre1 = "Dani";
let nombre2 = "Felipe";
let nombre3 = "Josue";

console.log(nombre1);
console.log(nombre2);
console.log(nombre3);

//typeof es un método que nos permite saber qué tipo de dato es el que tenemos

console.log(typeof(nombre1));
let comensal;
console.log(typeof(comensal));

//Conversión de datos de números a cadenas de texto utilizando dos herramientas distintas String/toString
console.log(String(edad));
console.log(typeof String(edad));
console.log(typeof bendis.toString());

//Conversión de cadenas de texto a número utilizando tres herramientas distintas Number/parseInt/parseFloat
let cambionumber = console.log(typeof Number(primaveras));
metodoParseInt =console.log(typeof parseInt(primaveras));
metodoParsEfLOAT = console.log(typeof parseFloat(primaveras));

//Conversión de boolean a number
let ine = true;
let cambioNumber = console.log(Number(ine));
console.log(typeof parseInt(ine));
console.log(typeof parseFloat(ine));
console.log(typeof ine.toString());

//Concatenar se refiere a unir strings
let nombre4 = prompt("Holi, ¿cuál es tu nombre?");
alert("Hola " + nombre4);

//Ejemplo
let producto1 = prompt("Ingresa el costo de producto");
let cantidad = prompt("Ingresa el número de productos solicitados");

// let resultado = producto + cantidad;
// alert(resultado);

let operacion3 = Number(producto1) + Number(cantidad);
let resultado = parseFloat(producto1) * parseFloat(cantidad);
alert("Este es el resultado " + resultado);
