const fretInit = (config) => {
    const {cuerdas, trastes, fretColor, stringColor, inlays, bgcolor, fretboardColor} = config
    if (!cuerdas) { cuerdas = 6 }
    if (!trastes) { cuerdas = 22 }
    if (!fretColor) { cuerdas = 'black' }
    if (!stringColor) { stringColor = 'black'}
    if (!inlays) { inlays = 'fender'}
    if (!bgcolor) { bgcolor = 'white'}
    if (!fretboardColor) {fretboardColor='maple'}
    
}

export const dotRemove = (name) => {
    if (!name) {
        return
    }

    const puntos = document.getElementsByTagNameNS('http://www.w3.org/2000/svg','circle')
    for (let i=0;i<puntos.length;i++) {
        if (puntos[i].getAttribute('name') == name) {
        puntos[i].remove()        
        }
    }
}

export const dotCreate = (cuerda, traste, name, color='red') => {
    if (!name || !cuerda || !traste) {
        return
    }
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.setAttribute('r', 10)
    circle.setAttribute('cx', 40 * traste + 20) //20 es el intermedio entre 0 y 40
    circle.setAttribute('cy', 80 + (cuerda-1)*25) //100 + (cuerda - 1) * 25 // la cuerda 1 empieza en 100
    circle.setAttribute('fill', color)
    circle.setAttribute('name', name)

    const fretboard = document.getElementById('fretboard')
    fretboard.appendChild(circle)
}

export const viewStringFret = (text) => {

}