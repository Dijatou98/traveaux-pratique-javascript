
class Personne {

constructor(nom, age){
    this.nom = nom;
    this.age = age;
}

anniversaire(){
    this.age++; 
}
}

const personne1 = new Personnne("Didi fall", 23)
personne1.anniversaire();
console.log(`Salut ${this.nom} vous avez ${this.age} ans`);
