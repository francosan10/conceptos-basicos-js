// un objeto es una entidad compleja, una serie de propiedades con valores y luego una serie de metodos
// abstraccion
// se usa cuando voy a crear un solo objeto especifico
// notacion literal

const usuario = {
    // propiedades  clave : valor
    nombre: 'Juan',
    edad: 18,
    mail: 'juan@mail.com',
    apellido: 'Perez',
    password: '1234Jp$',
    nickname: 'el Juancho',
    // metodos
    login: function () {
        // this es una referencia a un objeto
        console.log(this);
        document.write(`<p>El usuario "${this.nickname}" fue logueado</p>`);
    },
    logout: () => {
        // en una arrow function no la puedo utilizar, pierde la referencia (el alcance o scope) 
        console.log(this);
        document.write(`<p>El usuario fue deslogueado</p>`);
    }
};

console.log(usuario);
document.write(usuario);
// nombre de objeto . propiedad (es la mas usada)
document.write(`<h2>Usuario: ${usuario.nickname}</h2>`);
document.write(`<p>Nombre completo: ${usuario.apellido}, ${usuario.nombre}</p>`);
document.write(`<p>Edad: ${usuario['edad']}</p>`);
// siempre q escriba mal la propiedad me va a dar undefined
document.write(`<p>Edad: ${usuario['Edad']}</p>`);

// modificar una propiedad del objeto
usuario.edad = 25;
document.write(`<p>Edad: ${usuario['edad']}</p>`);

usuario.fotoPerfil = 'https://img.freepik.com/foto-gratis/pajaro-palabra-aguila-sus-alas_1340-33393.jpg?size=626&ext=jpg&ga=GA1.1.1016474677.1696896000&semt=ais';
console.log(usuario);

// borrar una propiedad de un objeto
delete usuario.apellido;
console.log(usuario);

// usar los metodos del objeto
usuario.login();
usuario.logout();
