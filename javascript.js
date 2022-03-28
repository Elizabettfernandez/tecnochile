
function myFunction() {

let nombre = prompt('ingresa tu nombre');
let apellido = prompt('ingresa tu apellido');

console.log(nombre+" "+apellido);

let datos = document.getElementById('clientes');

datos.innerHTML= `${nombre} ${apellido}`; 
}