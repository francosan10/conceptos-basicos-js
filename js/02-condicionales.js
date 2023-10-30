// Condicionales
/*
if (condicion logica) {
    todo el codigo que quiero realizar si la condicion es verdadera
}
*/

// Solicite la edad al usuario e indique si debe votar
// 16 y menores de 18 es optativo, mayores de 70
// 18 a 70 obligatorio

let edad = parseInt(prompt('Ingrese su edad'));

if (edad >= 18 && edad <= 70) {
    document.write('Debe votar');
} else {
    if (edad >=16 && edad <18 || edad >70) {
        document.write('Es optativo votar')
    } else {
        document.write('No debe votar');
    }
}