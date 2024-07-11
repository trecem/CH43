//alert("Hola mundo"); comentario de una sola línea

/*Comentarios multilínea*/

alert("Hola mundo");

console.log("Holi crayoli");

document.write("Hola CH43");


let re = new RegExp("\\D");
let nombre = prompt ("Ingresa tu nombre");
if (nombre.match(re)){
alert("Hola, " + nombre + ". !Eres participante de la CH43!"); 
} else {
alert("Comparte tu nombre, no tu cel compa");}