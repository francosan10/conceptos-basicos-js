// funciones declarativas

// funciones sin parametros
function saludar() {
    // aqui va el codigo que va a realizar la funcion
    document.write('<p>Hola Mundo</p>');
}

// funciones con parametros
function saludoNuevo(nombreSolicitado, apellidoSolicitado) {
    document.write(`<p>Hola ${nombreSolicitado}, ${apellidoSolicitado} 😎</p>`);
}

function multiplicar (numero1, numero2) {
    const resultado = numero1 * numero2;
    return resultado;
}

// llamar o invocar a la funcion
saludar();

const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');

saludoNuevo(nombre, apellido);
saludoNuevo('jocker');
saludoNuevo('Harry', 'Potter');

const resultadoNuevo = multiplicar(30, 3);
document.write(`El resultado de la multiplicacion fue ${resultadoNuevo} <br>`);
document.write(`El resultado de la multiplicacion fue ${multiplicar(45,3)} <br>`);