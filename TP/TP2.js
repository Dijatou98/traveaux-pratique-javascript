var val = prompt("Veuillez saisir un nombre :")

if (isNaN(val)) {
    val = prompt("Veuillez saisir un nombre :")
}else{
    if (val%2==0){
        console.log(`${val} est un nombre pair`)
    }else{
       console.log(`${val} n'est pas un nombre pair`)
    }
}