let fruta = "abacate"

switch(fruta) {
    case "goiaba":
    case "maca":
    case "uva":
        console.log("Vamos fazer um suco de " + fruta)
        break
    
    case "abacate":
    case "banana":
    case "morango":
        console.log("Vamos fazer uma vitamina de " + fruta)
        break
    
    default:
        console.log("Não temos essa opção")
}
console.log("\nSaiu do switch case")