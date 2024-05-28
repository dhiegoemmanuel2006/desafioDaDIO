let nameHeroi = "Dhiego"
let levelHeroi = 10050

if(levelHeroi <= 1000) {
    console.log("O heroi " + nameHeroi + " é de nivel ferro")
} 
else if (levelHeroi > 1000 && levelHeroi <= 2000) {
    console.log("O heroi " + nameHeroi + "é de nivel bronze")
}
else if (levelHeroi > 2000 && levelHeroi <= 5000) {
    console.log("O heroi " + nameHeroi + " é de nivel prata/ouro")
}
else if (levelHeroi > 5000 && levelHeroi <= 8000) {
    console.log("O heroi " + nameHeroi + " é de platina/diamante")
} 
else if (levelHeroi > 8000 && levelHeroi <= 9000) {
    console.log("O heroi " + nameHeroi + " é de nivel ascendente")
} 
else if (levelHeroi > 9000 && levelHeroi <= 10000) {
    console.log("O heroi " + nameHeroi + " é de imortal")
} 
else {
    console.log("O heroi " + nameHeroi + " é de nivel radiante")
} 


