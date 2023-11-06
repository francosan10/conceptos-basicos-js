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
