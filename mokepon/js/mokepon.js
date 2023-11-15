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

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// Funciones para mascotas
function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        // Hipodoge
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        // Capipepo
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        // Ratigueya
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
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
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

// Funcion final del juego
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')
    sectionMensajes.innerHTML = resultadoFinal

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