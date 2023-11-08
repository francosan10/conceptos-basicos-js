// 1- consulta saldo 2- ingrese dinero 3- extraiga dinero
// como hago para ingresar y extraer dinero

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

let saldo = 0;

do {
  let opcion = prompt(
    "seleccione una opción 1- consulta saldo, 2- ingrese dinero, 3- extraiga dinero"
  );

  console.log(opcion.toLowerCase());
  opcion = opcion.toLowerCase(); // transforma un string en minusculas

  switch (opcion) {
    case "saldo":
    case "consultar saldo":
    case "1":
      document.write(`<p>Su saldo actual es $ ${saldo}</p>`);
      console.log(`Su saldo actual es $ ${saldo}`);
      break;

    case "2":
      let deposito = parseInt(prompt("cuato deseas depositar?:"));
      
      console.log(isNaN('hola')) // si no es un numero devuelve true
    // si el deposito es un numero
      if(!isNaN(deposito) && deposito > 0) {
      saldo += deposito;
      document.write(
        `<p>se ingreso $${deposito}, su saldo actual: $${saldo}</p>`
      );
      console.log(`ingrese dinero ${deposito}`);
      console.log(`su saldo actual: $${saldo}`);
    } else {
        alert('ingreso un valor invalido');
    }
      break;

    case "3":
      document.write(`<p>quiere extraer dinero</p>`);
      let extraccion = parseInt(prompt("cuato deseas extraer?:"));
      
      if(!isNaN(extraccion) && extraccion > 0) {
      saldo -= extraccion;
      document.write(
        `<p>se retiró $${extraccion}, su saldo actual es: $${saldo}</p>`
      );
      console.log(`retire dinero ${extraccion}`);
      console.log(`su saldo actual: $${saldo}`);
    } else {
        alert('ingreso un valor invalido');
    }
      break;
    default:
      alert("selecciono una opcion incorrecta");
  }
} while (confirm("Desea realizar otra operación?"));
