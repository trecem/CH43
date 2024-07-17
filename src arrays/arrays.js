/*** Creando Arrays  ***/

// --- Opción 1. Para inicializar un Array puedo escribir de manera directa los elementos dentro de los corchetes
let shopping = ['pan', 'leche', 'queso', 'espinacas', 'huevos', 'carne']; //6 elementos

// --- Opción 2. A partir de un Array vacío iremos agregando elementos por cada índice
let cars = []; //Array vacío
    // Agrego elementos llamando al Array y el index de cada elemento
    cars[0] = 'volkswagen';
    cars[1] = 'mazda';
    cars[2] = 'suziki';
    cars[3] = 'nissan';
    
// --- Opción 3. Mandar a llamar el Array como objeto. Al ser un objeto posee su propia clase (Array)
let cantantes = new Array('Luis Miguel', 'Wendy Sulca', 'José José', 'Justin Bieber', 'Los Llayras', 'Los panchos', 'Molotov');

// Imprimiendo en consola los tres Arrays
console.log(shopping);
console.log(cars);
console.log(cantantes);

//Acceder a un elemento del Array mediante su índice
let accesoElemento = `Sebastian se come un ${shopping[0]} mientras conduce su ${cars[3]}`; //Output Sebastian se come un pan mientras conduce su nissan

console.log(accesoElemento);

/*** Métodos de Arrays ***/

// --- Longitud de un Array (.length)

let longitudCantantes = cantantes.length;

console.log(longitudCantantes); //Output: 7

// --- Acceder al últmo elemento de cualquier Array (Array.length-1)

let ultimoElemento = cantantes[cantantes.length-1];

console.log(ultimoElemento); //Output: Molotov

//Creando nuevo Array para probar mis métodos

const ch43 =['miriam', 'alan', 'miguel', 'mitzi', 'juan', 'liz', 'diego', 'mariscal', 'emily', 'arturo', 'sadrak', 'josue', 'saul', 'fernando', 'oscar', 'salvador', 'erick', 'monica', 'cristian', 'felipe', 'pablo', 'cintia', 'brandon'];

console.log(ch43);

// --- pop(); elimina el último elemento del Array]
ch43.pop();
console.log(ch43);

// --- push (); agregamos un nuevo elemento al final del Array
ch43.push('brandon');
console.log(ch43);

