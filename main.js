const Jugador =function(nombre,asistencias,goles){
this.nombre = nombre,
this.asistencias = asistencias
this.goles = goles
}

let jugador1= new Jugador ("Lewandowski", 8, 17)
let jugador2= new Jugador ("Ferran", 2, 7)
let jugador3= new Jugador ("Felix", 3, 7)
let jugador4= new Jugador ("Rapinha", 9, 6)
let jugador5= new Jugador ("Gundogan", 8, 5)

let lista = [jugador1,jugador2,jugador3,jugador4,jugador5]

function filtrarJugadores(){
    let palabraClave = prompt("Ingresar jugador que desea buscar").trim().toUpperCase()
    let resultado = lista.filter((jugador)=> jugador.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length > 0){
        console.table(resultado)
    }else {
        let respuesta = prompt("No se encontró ningún jugador con el nombre: " + palabraClave + ". ¿Desea agregarlo? (Sí/No)");
        if (respuesta.toLowerCase() === "sí" || respuesta.toLowerCase() === "si") {
            agregarJugador();
        } else {
            alert("No se agregó ningún jugador.");
        }
    }


}


function agregarJugador(){
let nombre = prompt("ingresa el nombre del jugador")
let asistencias = prompt("Ingresa numero de asistencias")
let goles = prompt("ingresa numero de goles")

if(isNaN(asistencias) || isNaN(goles) || (nombre=="" || nombre==undefined)){
    alert("por favor ingresa datos validos")
    return
}
let jugador = new Jugador(nombre, asistencias, goles)

if(lista.some(  (p)=>p.nombre === jugador.nombre)){
    alert("el jugador ya existe")
    return
}
lista.push(jugador)
console.table(lista)

}