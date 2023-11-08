// declarar un array
const personajes = [];

const peliculas = ['Interestellar', 'matrix', 'lotr', 2023, true, 'Los juegos del hambre'];

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

document.write(`<h2>Lista de peliculas con 2 pelis nuevas (${peliculas.length})</h2>`);
document.write('<ul>');
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++) {
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write('<ul>');

// metodo splice (puede agregar elementos al array en la posicion que yo quiera
peliculas.splice(3, 0, 'Scream');

document.write(`<h2>Lista de peliculas, agregamos scream (${peliculas.length})</h2>`);
document.write('<ul>');
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++) {
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write('<ul>');

// metodo push para agregar un elemento al final del array

peliculas.push('Gran Turismo');

document.write(`<h2>Lista de peliculas, agregamos Gran Turismo (${peliculas.length})</h2>`);
document.write('<ul>');
for(let indicePeliculas = 0; indicePeliculas < peliculas.length; indicePeliculas++) {
    document.write(`<li>${peliculas[indicePeliculas]}</li>`);
}
document.write('<ul>');