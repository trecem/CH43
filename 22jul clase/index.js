// Accediendo a los diferentes elementos del documento HTML utilizando su etiqueta, su clase o su id.
// Acceder mediante el id: document.getElementById("id");
const tituloH1 = document.getElementById('title1');
const tituloH2 = document.getElementById('title2');
console.log(tituloH1); //Trae el elemento completo (con etiquetas y atributos)
console.log(tituloH2); 
console.log(tituloH1.innerText); //Recupero solamente el texto que vive entre el elemento. Output: Dom Manipulation
// Acceder a los elementos mediante clases: document.getElementByClassName('class');
const titulos = document.getElementsByClassName('title');
console.log(titulos); //Me muestra todos los elementos de la misma clase como una Colección HTML
console.log(titulos.length); //Output: 4
console.log(typeof titulos); //Output: Object