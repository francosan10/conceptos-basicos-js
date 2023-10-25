// Comentario de una sola linea en JS

/*
Comentario 
de varias 
lineas
*/

// declarar una variable (var - let - const)

let anioActual = 2023;
const universe = "https://universe.rollingcodeschool.com/";

// mostrar mensajes
console.log(anioActual);
console.log('anioActual');
console.log('año actual: ' +anioActual);
console.log(universe);
// una const no puede modificarse
//universe = "otra cosa";

// modificar el contenido de una variable
anioActual = 2024;
console.log(anioActual);


document.write('<p>Esto es una prueba de document write</p>');

// ventanas emergentes
//alert('esto es una alerta');

// solicitar a un usuario un nombre y mostrar un saludo
const usuario = prompt('Ingrese su nombre:');
console.log(usuario);

document.write('<p>Bienvenido ' + usuario + '</p>');

// solicitar a un usuario un precio de un producto en dolares
const precioSolicitado = prompt('ingrese un valor en usd');
//alert('el importe ingresado corresponde a $'+(precioSolicitado*1100)+ ' pesos argentinos');

// parseInt('50') 
// parseFloat(50.4)
alert('el importe ingresado corresponde a usd$'+(parseFloat(precioSolicitado)+2));