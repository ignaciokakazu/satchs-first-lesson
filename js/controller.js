import { getNotes } from "./model.js";
import {viewStringFret, dotRemove, dotCreate} from './view.js';

let respuesta = ''

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selecciona() {
    const array = getNotes()
    const random = getRandomInt(0, array.length)
    const cuerda = array[random][0]
    const traste = array[random][1]
    const message = [cuerda, traste]
    // document.getElementById('cuerda').innerText = cuerda
    // document.getElementById('traste').innerText = traste
    respuesta = array[random][2]

    dotRemove('punto')

    dotCreate(cuerda, traste, 'punto', 'red')
}



function enviar() {
    const sol = document.getElementById('solucion').value
    if (sol === respuesta) {
        document.getElementById('respuesta').innerText = 'Ok'
    } else {
        document.getElementById('respuesta').innerText = 'No. ' + respuesta
    }
}

document.getElementById("enviar").addEventListener('click', enviar)
document.getElementById("reiniciar").addEventListener('click', selecciona)

selecciona()
