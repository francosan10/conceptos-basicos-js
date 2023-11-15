// nombre, tipo, peso, altura, evolucion, ataques, pokedex, fuerza
class Pokemon {
    #tipo; // propiedad privada
    // constructor : el primer metodo que se ejecuta automaticamente al crear un objeto
    constructor (nombre, tipo, peso, altura, evolucion, ataques, numPokedex, fuerza) {
        this.nombre = nombre;
        this.#tipo = tipo;
        this.peso = peso;
        this.altura = altura;
        this.evolucion = evolucion;
        this.ataques = ataques;
        this.numPokedex = numPokedex;
        this.fuerza = fuerza;
    }
    // propiedades computadas get y set. se caracterizan por ser propiedades cortas
    // get devuelve el dato privado (lee la propiedad)
    get tipo () {
        return this.#tipo;
    }
    // set modifica el dato privado
    set tipo (nuevoTipo) {
        this.#tipo = nuevoTipo;
    }

    // metodos
};
// crear o instanciar un objeto
const charmander = new Pokemon ('Charmander', 'fuego', 15, 0.6, ['charmeleon', 'charizard'], ['blaze', 'ascuas', 'lanzallamas'], 4, 4);

console.log(charmander);
document.write(`<h2>Pokemon: ${charmander.nombre}</h2>`);
// no se puede acceder fuera de la clase
document.write(`<p>Tipo: ${charmander.tipo}</p>`);

charmander.tipo = 'fuego 2';
document.write(`<p>Tipo: ${charmander.tipo}</p>`);


