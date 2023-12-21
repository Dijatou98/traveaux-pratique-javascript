function calculerSurface(largeur, longueur){
    return largeur * longueur
}

function rectangle (largeur, longueur){
    this.largeur = largeur
    this.longueur = longueur
}

const result = calculerS(6, 8)
console.log(`la surface du rectangle est de ${result}`)