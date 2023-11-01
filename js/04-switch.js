// 1- consulta saldo 2- ingrese dinero 3- extraiga dinero
// como hago para ingresar y extraer dinero

let opcion = prompt('seleccione una opción 1- consulta saldo, 2- ingrese dinero, 3- extraiga dinero');

let saldo = 0;
console.log(opcion);
opcion = opcion.toLowerCase(); // transforma un string en minusculas
// opcion = opcion.toUpperCase();  transforma un string en MAYUSCULAS


// if (opcion === '1') {
//     document.write(`<p>Su saldo actual es ${saldo}</p>`);
// } else if (opcion === '2') {
//     document.write(`<p>quiere ingresar dinero</p>`);
// } else if (opcion === '3') {
//     document.write(`<p>quiere extraer dinero</p>`);
// } else {
//     alert('<p>selecciono una opcion incorrecta</p>');
// }

// switch

switch (opcion) {
    case 'saldo':
    case 'consultar saldo':
    case '1':
        document.write(`<p>Su saldo actual es ${saldo}</p>`);
        break;
    case '2':
        document.write(`<p>quiere ingresar dinero</p>`);
        break;    
    case '3':
        document.write(`<p>quiere extraer dinero</p>`);
        break;
    default:
        alert('<p>selecciono una opcion incorrecta</p>');
}