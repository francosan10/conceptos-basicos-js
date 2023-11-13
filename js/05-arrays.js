// declarar un array
const personajes = [];

const peliculas = ['Interestellar', 'matrix', 'lotr', 2023, true, 'Los juegos del hambre'];

const mostrarPeliculas = (titulo) => {
    document.write(`<h2>${titulo}</h2>`);
    document.write('<ul>');
    for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++) {
        document.write(`<li>${peliculas[indicePeliculas]}</li>`);
    }
    document.write('<ul>');
}
mostrarPeliculas('Lista de Peliculas');

// mostrar un array
console.log(peliculas);
document.write(peliculas);

document.write(`<p>El primer elemento del array es ${peliculas[0]}</p>`);
console.log(peliculas.length);
document.write(`<p>El ultimo elemento del array es ${peliculas.length - 1}</p>`);
document.write(`<p>Un elemento del array es ${peliculas[20]}</p>`);

document.write('<h2>Lista de peliculas</h2>');
document.write('<ul>');
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++) {
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write('<ul>');

// agregar elementos al array

// metodo unshift (agrega elementos al principio del array)
peliculas.unshift('Batman', 'Ironman 1');
mostrarPeliculas(`Lista de peliculas con 2 pelis nuevas (${peliculas.length})`);

// metodo splice (puede agregar elementos al array en la posicion que yo quiera
peliculas.splice(3, 0, 'Scream');
mostrarPeliculas(`Lista de peliculas, agregamos scream (${peliculas.length})`);

// metodo push para agregar un elemento al final del array
peliculas.push('Gran Turismo');
mostrarPeliculas(`Lista de peliculas, agregamos Gran Turismo (${peliculas.length})`);

// modificar elementos del array
peliculas[6] = 'Inception';
mostrarPeliculas(`Lista de peliculas, modificamos el elemento de la posicion 6 del array (${peliculas.length})`);

// eliminar elementos al principio del array
// metodo shift elimina el primer elemento del array
peliculas.shift();
mostrarPeliculas(`Lista de peliculas, eliminamos el primer elemento del array (${peliculas.length})`);

// metodo splice elimina un elemento determinado del array
peliculas.splice(6, 1,);
// peliculas.splice(6, 2,);
// peliculas.splice(6);
mostrarPeliculas(`Lista de peliculas, eliminamos un elemento del array (${peliculas.length})`);

// metodo pop elimina el ultimo elemento del array
peliculas.pop();
mostrarPeliculas(`Lista de peliculas, eliminamos el último elemento del array (${peliculas.length})`);

// filtrar todas las pelis Jurasic Park

peliculas.push('Jurassic Park 1', 'Jurassic Park 2');
peliculas.splice(2, 0, 'Jurassic Park 3');
mostrarPeliculas('Agregamos nuevas pelis de Jurassic Park');

// const pelisDeJurasicPark = peliculas.filter((pelicula) => pelicula === 'Jurassic Park');
const pelisDeJurasicPark = peliculas.filter((pelicula) => pelicula.includes('Jurassic'));
console.log(pelisDeJurasicPark);

console.log(peliculas[peliculas.length -1].includes('Jurassic'));
// metodos inmutables, son los que no modifican los elementos de un array.

// metodo find sirve para buscar un elemento especifico del array

const peliBusacda = peliculas.find( (itemPelicula) => itemPelicula === 'Interestellar');
console.log(peliBusacda);

const peliBusacda2 = peliculas.find( (itemPelicula) => itemPelicula === 'Rocky 2');
console.log(peliBusacda2);

document.write(`<p>${peliBusacda}</p>`);
document.write(`<p>${peliBusacda2}</p>`);

if (peliBusacda2 !== undefined) {
    document.write(`<p>${peliBusacda2}</p>`);
} else {
    document.write('<p>No se encontro la pelicula buscada</p>');
}

// operador ternario
// (condicion logica) ? true : false
// const respuesta = (peliBusacda2 !== undefined) ? peliBusacda2 : 'No se encontró la peli.'
document.write(`<p>Peli buscada: ${(peliBusacda2 !== undefined) ? peliBusacda2 : 'No se encontró la peli.'}</p>`);
