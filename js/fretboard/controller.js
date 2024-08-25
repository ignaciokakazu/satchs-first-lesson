import { getNotes } from "./model.js";
import {viewFret} from './view.js';

const fretboard = (config) => {
    const fretId = document.getElementById('fretboard')
    //fretinit es el fret donde empieza
    //fretfinish es el fret donde termina
    console.log(config)
    let {title, subtitle, fretInit, fretEnds, strings, stringsColor, inlays, bgcolor, fretMaterial} = config
    if (!fretInit) { fretInit = 0 }
    if (!fretEnds) { fretEnds = 24 }
    if (!strings) { strings = 6 }
    if (!stringsColor) { stringsColor = 'black'}
    if (!inlays) { inlays = 'fender'}
    if (!bgcolor) { bgcolor = 'white'}
    if (!fretMaterial) {fretMaterial='none'}
    if (!title) { title = ''}
    if (!subtitle) {subtitle=''}

    viewFret(fretId, {
        strings: strings,
        stringsColor: stringsColor, 
        inlays: inlays,
        bgcolor: bgcolor,
        fretMaterial: fretMaterial,
        fretInit: fretInit,
        fretEnds: fretEnds,
        title: title,
        subtitle: subtitle,
        notes: {
            afination: 'standar', //
            labeled: 'no', //notes, distancias
            color: false,// set de colores,
            note: [{
                f: 2,
                s: 1
            }] //par [cuerda, traste]
        }
    })
}


export default fretboard