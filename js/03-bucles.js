// Estructuras de repetición (while - do while - for
/* 
while (condicion logica) {
    todo el codigo que quiero ejecutar varias veces
    agregar algo para que la condicion logica no se cumpla
}
*/
let renglon = 1;
document.write('<p>Este es el renglon número' + renglon + '</p>');
document.write(`<p>Este es el renglon número ${renglon}</p>`);
//mientras se cumpla la condicion logica se ejecuta el codigo, hasta que no se cumpla.
while (renglon <= 20) {
    document.write(`<p>Este es el renglon número ${renglon}</p>`);
    renglon ++; // renglon = renglon + 1 
}

/*
do {
    todo el codigo que se ejecuta siempre al menos una vez
} while (condicion logica)
*/

let contador = 100;

do {
    document.write(`<p>Este es el renglon número ${contador} (do while)</p>`);
    contador++;
} while (contador <=10);

