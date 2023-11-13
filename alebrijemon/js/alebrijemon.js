// Variables Globales

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

// Iniciar juego

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

     // Variables
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    // Eventos
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciarJuego = document.getElementById('boton-reiniciar')
    botonReiniciarJuego.addEventListener('click', reiniciarJuego)
}

// Funciones para mascotas
function seleccionarMascotaJugador() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let inputAguilotoache = document.getElementById('aguiloteache')
    let inputJaguarzolote = document.getElementById('jaguarzolote')
    let inputZorrolotuar = document.getElementById('zorrolotuar')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputAguilotoache.checked) {
        spanMascotaJugador.innerHTML = 'Aguilotoache'
    } else if (inputJaguarzolote.checked) {
        spanMascotaJugador.innerHTML = 'Jaguarzolote'
    } else if (inputZorrolotuar.checked) {
        spanMascotaJugador.innerHTML = 'Zorrolotuar'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        // Aguilotoache
        spanMascotaEnemigo.innerHTML = 'Aguilotoache'
    } else if (mascotaAleatoria == 2) {
        // Jaguarzolote
        spanMascotaEnemigo.innerHTML = 'Jaguarzolote'
        // Zorrolotuar
    } else {
        spanMascotaEnemigo.innerHTML = 'Zorrolotuar'
    }
}

// Funciones para ataques
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

// Funcion para combate
function combate(){ 
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

        // COMBATE
        let resultado;
        if(ataqueEnemigo == ataqueJugador){
            crearMensaje("EMPATE 🫤")
        }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
            crearMensaje("GANASTE 🎉") 
            vidasEnemigo = vidasEnemigo - 1
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
            crearMensaje("GANASTE 🎉") 
            vidasEnemigo = vidasEnemigo - 1
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
            crearMensaje("GANASTE 🎉") 
            vidasEnemigo = vidasEnemigo - 1
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else{
            crearMensaje("PERDISTE 😓")
            vidasJugador = vidasJugador -1
            spanVidasJugador.innerHTML = vidasJugador
        }
        evaluarVidas()
}

// Funcion para revisar vidas
function evaluarVidas(){
    if(vidasEnemigo == 0){
        // ganamos
        crearMensajeFinal("Felicitaciones! GANASTE 🎉")
        }else if(vidasJugador == 0){
        // perdimos
        crearMensajeFinal("Lo lamento perdiste 😓")
    }
}

// Funciones para mensajes
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + " por lo tanto " + resultado
    sectionMensajes.appendChild(parrafo)
}

// Funcion final del juego
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

// Funcion para reiniciar juego
function reiniciarJuego(){

    location.reload()

}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// NOTA: esta es otra manera de llamar al script despues de que se cargue todo el HTML. La funcion iniciarJuego se carga cuando ya todo el contenido esta cargado.

window.addEventListener('load', iniciarJuego)