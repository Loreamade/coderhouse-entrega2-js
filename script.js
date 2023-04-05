// Entrega 2
// Alumna: Lorena Muñoz

// Bienvenida
// alert("Haz encontrado la maleta de animales fantásticos de Newt Scamander\nPor favor ayuda a los animales asegurandote de que todos esten a salvo y bien")

//Constructor de criaturas
class Criatura {
    constructor(nombre, especie, sexo, habitat) {
        this.nombre = nombre
        this.especie = especie
        this.sexo = sexo
        this.habitat = habitat
    }
}

const criatura1 = new Criatura ("Teddy", "Escarbato", "Macho", "Urbano")
const criatura2 = new Criatura ("Dougal", "Demiguise", "Macho", "Bosque")
const criatura3 = new Criatura ("Pickett", "Bowtruckle", "Macho", "Bosque")
const criatura4 = new Criatura ("Nagini", "Maledictus de Serpiente", "Hembra", "Urbano")

const criaturas = [criatura1, criatura2, criatura3, criatura4]

//Menú inicial
let inicio;
do {
    inicio = prompt("Si agregar un nuevo animal, escribe: 1\nSi encontrar algun animal según su habitat, escribe: 2\nSi quieres ver todos los animales en la maleta, escribe: 3\nDe lo contrario, escribe ESC ");
    switch(inicio) {
        case "1":
            agregarCriatura()
            break;
        case "2":
            encontrarPorHabitat()
            break;
        case "3":
            mostrarTodas()
            break;
        case "4":
            contarCriaturas()
            break;
        default:
            alert("Por favor actualiza la página")
            break;
    }
}while (inicio != null && inicio.toUpperCase() != "ESC")

// Agregar una criatura
function agregarCriatura() {
    let nNombre = prompt("Ingresa el nombre de la criatura")
    let nEspecie = prompt("De que especie es la criatura")
    let nSexo = prompt("Cual es el sexo de la criatura")
    let nHabitat =prompt("A que habitat debemos enviar la criatura, actualmente tenemos habitats urbano y bosque")
    const nuevaCriatura = new Criatura(nNombre, nEspecie, nSexo, nHabitat)
    criaturas.push(nuevaCriatura)
}

//Buscar criaturas por habitat
function encontrarPorHabitat () {
    let criterio = prompt("Quieres ver todas las criaturas del habitat Urbano o Bosque")
    let resultado = criaturas.filter(criatura => criatura.habitat.toUpperCase() == criterio.toUpperCase())
    if(resultado.length == 0 ) {
        alert("Por favor ingrese un habitat valido")
    } else {
        alert("Revisa los resultados en la consola");
        console.log(resultado) 
    }
}

//Mostrar todas las criaturas
function mostrarTodas () {
    alert("Revisa los resultados en la consola")
    return console.log(criaturas)
}

//Conteo de criaturas

function contarCriaturas() {
    let cuantosMachos = criaturas.reduce((acc, criatura) => {
        if (criatura.sexo.toUpperCase() == "MACHO"){
            return acc + 1
        }
        return acc
    } , 0) 
    let cuantasHembras = criaturas.reduce((acc, criatura) => {
        if (criatura.sexo.toUpperCase() == "HEMBRA"){
            return acc + 1
        }
        return acc
    } , 0) 
    let cuantosIndef = criaturas.reduce((acc, criatura) => {
        if (criatura.sexo.toUpperCase() != "MACHO" && criatura.sexo.toUpperCase() != "HEMBRA"){
            return acc + 1
        } 
        return acc
    } , 0) 
  alert("Hay " + cuantosMachos + " criaturas macho, " + cuantasHembras +  " criaturas hembras y " + cuantosIndef + " desconocidos\nPara un total de " + (cuantasHembras + cuantosIndef + cuantosMachos) + " criaturas")
}
