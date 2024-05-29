class tipoPersonagem{
    constructor(nameAventureiro, ageAventureiro, typeAventureiro){
    this.namePersonagem = nameAventureiro;
    this.agePersonagem = ageAventureiro;
    this.typePersonagem = typeAventureiro;
    }
    arma(){
        if(this.typePersonagem === "mago"){
            armaUser = "magia"
        }
        else if(this.typePersonagem === "guerreiro"){
           armaUser = "espada"
        }
        else if(this.typePersonagem === "monge"){
           armaUser = "artes marciais"
        }
        else{
           armaUser = "shuriken"
        }
                        
    }
}

const nameAventureiro = "Dhiego";
const ageAventureiro = 18;
const typeAventureiro = "monge";

let infoAventureiro = new tipoPersonagem(nameAventureiro, ageAventureiro, typeAventureiro);

 let armaUser
infoAventureiro.arma()

console.log( infoAventureiro.typePersonagem + " atacou usando " + armaUser)