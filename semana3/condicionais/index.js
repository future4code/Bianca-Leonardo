// Exercício 1 de interpretação

// recebe pelo prompt um número do usuário e guarda na constante repostaDoUsuario
// Transforma a resposta do usuario em numero e guarda na constante numero
// verifica se o numero recebido é par e caso seja retorna o valor "Passou no teste", se não "Não passou no teste"

// Exercício 2 de interpretação

// a. para receber a fruta comprada e retornar o preço

// b. "O preço da fruta Maçã é R$ 2.25"

// c. "O preço da fruta Pêra é R$ 5"


// Exercício 3 de interpretação

// a. Recebendo uma informação do prompt, transformando em número e guardando na constante numero

// b. "Esse número passou no teste", se fosse -10 não haveria retorno pois -10 é menor que 0

// c. sim, pois mensagem não é uma variável global


// Exercício 4

// let idade = Number(prompt("Qual a sua idade?"))

// if (idade >= 18) {
//     console.log ("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }


// Execício 5

// let turno = prompt("Qal o seu turno? Digite M para (Matutino), V para (Vespertino) e N para (Noturno)").toUpperCase()

// if (turno === "M") {
//     console.log("Bom dia")
// } else if(turno === "V"){
//     console.log("Boa Tarde")
// } else {
//     console.log("Boa Noite")
// }


// Exercício 6

// let turno = prompt("Qual o seu turno? Digite M para (Matutino), V para (Vespertino) e N para (Noturno)").toUpperCase()

// switch (turno) {
//     case "M":
//         console.log("Bom dia")
//         break;
//     case "V":
//         console.log("Boa Tarde")
//         break;
//     case "N":
//         console.log("Boa Noite")
//         break;
//     default:
//         console.log("Digite novamente")
//         break;
// }


// Exercício 7

// let generoFilme = prompt("Qual o gênero do filme? Digite F para fantasia, T para terror e R para romance").toUpperCase()
// let ingresso = Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme === "F" && ingresso < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme")
// }


// Desafio 1

// let generoFilme = prompt("Qual o gênero do filme? Digite F para fantasia, T para terror e R para romance").toUpperCase()
// let ingresso = Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme === "F" && ingresso < 15) {
//     let snack = prompt("Qual Snack você vai querer para acompanhar o filme?")
//     console.log(`Bom filme! \n ... com ${snack}`)
// } else {
//     console.log("Escolha outro filme")
// }


// Desafio 2

let nomeCompleto = prompt("Digite seu nome completo")
let tipoJogo = prompt("Qual o tipo de jogo? IN (internacional) ou DO(doméstico)?").toUpperCase()
let etapaJogo = prompt("Qual a etapa do jogo? SF(semi-final), DT(decisão de 3º lugar) e FI(final)").toUpperCase()
let categoria = Number(prompt("Qual a categoria? 1, 2, 3 ou 4"))
let qtdIngressos = Number(prompt("Quantos ingressos deseja comprar?"))
let total


if (etapaJogo === "SF") {
    if (categoria === 1) {
        total = qtdIngressos * 1320
    } else if (categoria === 2) {
        total = qtdIngressos * 880
    } else if (categoria === 3) {
        total = qtdIngressos * 550
    } else if (categoria === 4) {
        total = qtdIngressos * 220
    }
} else if (etapaJogo === "DT") {
    if (categoria === 1) {
        total = qtdIngressos * 660
    } else if (categoria === 2) {
        total = qtdIngressos * 440
    } else if (categoria === 3) {
        total = qtdIngressos * 330
    } else if (categoria === 4){
        total = qtdIngressos * 170
    }
} else if (etapaJogo === "FI") {
    if (categoria === 1) {
        total = qtdIngressos * 1980
    } else if (categoria === 2) {
        total = qtdIngressos * 1320
    } else if (categoria === 3) {
        total = qtdIngressos * 880
    } else if (categoria === 4){
        total = qtdIngressos * 330
    }
}

if (tipoJogo === "DO") {
    console.log(`---Dados da compra---\nNome do Cliente: ${nomeCompleto}\nTipo do Jogo: Nacional\nEtapa do Jogo: ${etapaJogo}\nCategoria: ${categoria}\nQuantidade de Ingressos: ${qtdIngressos}\n---Valores---\nValor do Ingresso: R$ ${total / qtdIngressos}\nValor Total: R$ ${total}`)
} else {
    console.log(`---Dados da compra---\nNome do Cliente: ${nomeCompleto}\nTipo do Jogo: Internacional\nEtapa do Jogo: ${etapaJogo}\nCategoria: ${categoria}\nQuantidade de Ingressos: ${qtdIngressos}\n---Valores---\nValor do Ingresso: U$ ${(total / qtdIngressos) / 4.10}\nValor Total: U$ ${total / 4.10}`)
}