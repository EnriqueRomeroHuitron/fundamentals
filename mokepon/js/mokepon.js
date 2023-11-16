// Variables Globales
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []

let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones

let inputHipodoge
let inputCapipepo
let inputRatigueya

let mascotaJugador

let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
// Objetos de entidad 
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)


// Objetos literarios 
hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' }
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' }
)

mokepones.push(hipodoge, capipepo, ratigueya)

// Iniciar juego
function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for="${mokepon.nombre}">
          <p>${mokepon.nombre}</p>
          <img src=${mokepon.foto} alt="${mokepon.nombre}">
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')

    })

    sectionReiniciar.style.display = 'none'

     // Variables
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    // Eventos
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// Funciones para mascotas
function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'    
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
  let ataques
   for (let i = 0; i < mokepones.length; i++) {

    if (mascotaJugador === mokepones[i].nombre) {
        ataques = mokepones[i].ataques
    }
   }
   console.log(ataques)
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
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

    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
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