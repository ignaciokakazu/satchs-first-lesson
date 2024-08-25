import { getNotes } from "./model.js";
import {viewStringFret, dotRemove, dotCreate} from './view.js';
import fretboard from "./fretboard/controller.js";

let respuesta = ''

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selecciona() {
    fretboard({strings: 6,
        stringsColor: 'black', 
        inlays: 'fender',
        bgcolor: 'white',
        fretMaterial: '',
        fretEnds: 22,
        title: 'Satchs first lesson',
        subtitle: '',
        // notes: {
        //     afination: 'standar', //
        //     labeled: 'no', //notes, distancias
        //     color: false,// set de colores,
        //     note: [{
        //         f: 2,
        //         s: 1
        //     }] //par [cuerda, traste]
        })
    const array = getNotes()
    const random = getRandomInt(0, array.length)
    const cuerda = array[random][0]
    const traste = array[random][1]
    
    // document.getElementById('cuerda').innerText = cuerda
    // document.getElementById('traste').innerText = traste
    respuesta = array[random][2]
    
    document.getElementById('respuesta').innerText = traste==0? 'Quick! Its the open ' + cuerda + ' string' : "Don't waste my time: the " + cuerda + ' string, ' + traste + ' fret'

    dotRemove('punto')

    dotCreate(cuerda, traste, 'punto', 'red')
}



function enviar() {
    const sol = document.getElementById('solucion').value
    if (sol === respuesta) {
        document.getElementById('respuesta').innerText = 'Ok'
    } else {
        document.getElementById('respuesta').innerText = 'Wrong! Its ' + respuesta
    }
}

document.getElementById("enviar").addEventListener('click', enviar)
document.getElementById("reiniciar").addEventListener('click', selecciona)

selecciona()
