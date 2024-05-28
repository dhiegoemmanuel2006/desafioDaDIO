// primeiro serão as vitorias depois as derrotas
let victory = 60
let lose = 10
let saldoVitorias = calculo(victory, lose)
let nivelHeroi = " "

function calculo(num1, num2) {
    let resultado = num1 - num2
    return resultado
}
 if(saldoVitorias < 10){
    nivelHeroi = "ferro"
 }
 else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivelHeroi = "bronze"
 }
 else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivelHeroi = "prata"
 }
 else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivelHeroi = "ouro"
 }
 else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivelHeroi = "diamante"
 }
 else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivelHeroi = "lendário"
 }
 else{
    nivelHeroi = "imortal"
 }

console.log("Com o saldo de " + saldoVitorias + " vitórias o heroi está no nivel " + nivelHeroi)



