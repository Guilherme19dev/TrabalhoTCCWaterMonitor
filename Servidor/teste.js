const nome="Guil@herme"

if(nome.includes(",")|| nome.includes("@")){
    console.log("Caractere invalido")
    module.exports = ""
}else{
const valor = nome
console.log("O nome de usuário__"+valor+"__passou")
module.exports = valor
}