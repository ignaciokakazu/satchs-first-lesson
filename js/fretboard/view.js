export const viewFret = (htmlElement, config) => {
    const {title, subtitle, fretInit, fretEnds, strings, fretColor, stringsColor, inlays, bgcolor, fretboardColor} = config

    htmlElement.setAttribute('style', 'background-color:' + bgcolor)
    //vertical
    for (let i=0;i<fretEnds+1;i++) {
        const fret = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        fret.setAttribute('x1', i * 40 + 40)
        fret.setAttribute('x2', i * 40 + 40)
        fret.setAttribute('y1', 80)
        fret.setAttribute('y2', 205)
        fret.setAttribute('stroke', 'black')        
        i==0? fret.setAttribute('stroke-width', "4") : ''
        htmlElement.appendChild(fret)
    }

    //horizontal
    for (let i=0;i<strings;i++) {
        const cuerda = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        cuerda.setAttribute('x1', 40)
        cuerda.setAttribute('x2', 1000)
        cuerda.setAttribute('y1', i * 25 + 80)
        cuerda.setAttribute('y2', i * 25 + 80)
        cuerda.setAttribute('stroke', stringsColor)
        htmlElement.appendChild(cuerda)
    }

    inlaysCreate(htmlElement, inlays, fretInit, fretEnds)

    console.log(title)
    console.log(subtitle)
    setTitle(htmlElement, title)
    setSubtitle(htmlElement, subtitle)
}

const inlaysCreate = (htmlElement, inlaysModel, fretInit, fretEnds) => {
    
    if (inlaysModel=='fender') {
        const arrayArriba = [[3, 's'], [5, 's'], [7, 's'], [9, 's'], [12, 'd'], [15,'s'], [17,'s'], [19,'s'], [21,'s']]
        const arrayAbajo = [[3, 's'], [5, 's'], [7, 's'], [9, 's'], [12, 'd'], [15,'s'], [17,'s'], [19,'s'], [21,'s']]
        //inlays arriba
        for (let i=0;i<arrayArriba.length;i++) {
            
            if (arrayArriba[i][1]=='s') {
                const inlay = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
                inlay.setAttribute('r', 5)
                inlay.setAttribute('cx', 40 * arrayArriba[i][0] + 20)
                inlay.setAttribute('cy', 220)
                inlay.setAttribute('fill', 'grey')
                htmlElement.appendChild(inlay)
                
            } else if (arrayArriba[i][1] == 'd') {
                const inlay = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
                inlay.setAttribute('r', 5)
                inlay.setAttribute('cx', 40 * arrayArriba[i][0] + 10)
                inlay.setAttribute('cy', 220)
                inlay.setAttribute('fill', 'grey')
                htmlElement.appendChild(inlay)                
                const inlay2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
                inlay2.setAttribute('r', 5)
                inlay2.setAttribute('cx', 40 * arrayArriba[i][0] + 30)
                inlay2.setAttribute('cy', 220)
                inlay2.setAttribute('fill', 'grey')
                htmlElement.appendChild(inlay2)                
            }                
        }
        // inlays abajo
        for (let i=0;i<arrayAbajo.length;i++) {
            
            if (arrayAbajo[i][1]=='s') {
                const inlay = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
                inlay.setAttribute('r', 10)
                inlay.setAttribute('cx', 20 + arrayAbajo[i][0] * 40 )
                inlay.setAttribute('cy', 142)
                inlay.setAttribute('fill', 'black')
                htmlElement.appendChild(inlay)
                
            } else if (arrayAbajo[i][1] == 'd') {
                const inlay = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
                inlay.setAttribute('r', 10)
                inlay.setAttribute('cx', 40 * arrayAbajo[i][0] + 20 )
                inlay.setAttribute('cy', 112)
                inlay.setAttribute('fill', 'black')
                htmlElement.appendChild(inlay)                
                const inlay2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
                inlay2.setAttribute('r', 10)
                inlay2.setAttribute('cx', 40 * arrayAbajo[i][0] + 20)
                inlay2.setAttribute('cy', 174)
                inlay2.setAttribute('fill', 'black')
                htmlElement.appendChild(inlay2)                
            }                
        }
        // <circle r="5" cx="140" cy="230" fill="grey" />
        return 
    }

    if (inlaysModel=='gibson') {

        return
    }

    if (inlaysModel=='ibanez') {

        return
    }

    if (inlaysModel=='numbers') {

        return
    }

}

export const viewDotRemove = (name) => {
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

export const viewDotCreate = (cuerda, traste, name, color='red') => {
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

const setTitle = (htmlElement, text) => {
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    title.setAttribute('x', 500)
    title.setAttribute('y', 25)
    title.setAttribute('fill', 'black')
    title.innerHTML = text
    htmlElement.appendChild(title)
}

const setSubtitle = (htmlElement, text) => {
    const subtitle = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    subtitle.setAttribute('x', 500)
    subtitle.setAttribute('y', 50)
    subtitle.setAttribute('fill', 'black')
    subtitle.innerHTML = text
    htmlElement.appendChild(subtitle)
   // <text x="5" y="15" fill="red">I love SVG!</text>
}
