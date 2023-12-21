const multiplierParDeux = (nbre) => {
    return nbre*2
}

const resultat = multiplierParDeux(2) * 4
console.log(`Le résultat de la multiplication est de ${resultat}`)

const scopeClosureFunction = (nbre) => {
    let resultat = nbre*2

    function multiplyByAChoiceNunbre(){
        resultat = resultat*4
        console.log(`Le résultat de la multiplication est de ${resultat}`)
    }

    return multiplyByAChoiceNunbre
}