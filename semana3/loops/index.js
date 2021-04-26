// Exercício 1 de Interpretação

// somando a posição do indice com a variável valor. Resultado: 10


// Exercício 2 de Interpretação

// a. 19, 21, 23, 25, 27, 30

// b. Sim.

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// for (let numero of lista) {
//     console.log(numero)
// }


// Desafio 1 de Interpretação

// 0
// 00
// 000
// 0000


// Exercício 3 de interpretação

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a.
// for (let numero of arrayOriginal) {
//     console.log(numero)
// }

// b.
// for (let numero of arrayOriginal) {
//     console.log(numero / 10)
// }

// c.
// let novoArray = []

// for (let numero of arrayOriginal) {
//     if (numero % 2 === 0) {
//         novoArray.push(numero)
//     }
// }

// console.log(novoArray)

// d.
// for (let index = 0; index < arrayOriginal.length; index++) {
//     console.log(`O elemento do index ${index} é: ${arrayOriginal[index]}`)

// }

// e.
// let maiorNumero = 0
// let menorNumero = 200

// for (let numero of arrayOriginal) {
//     if (numero > maiorNumero) {
//         maiorNumero = numero
//     } else if (numero < menorNumero) {
//         menorNumero = numero
//     }
// }

// console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)


// Desafio 1

// let numeroEscolhido = Number(prompt("Escolha um número"))
// console.log("Vamos jogar!!")

// let numeroChutado = 0
// let arrayDeChutes = []

// while (numeroChutado !== numeroEscolhido) {
//     numeroChutado = Number(prompt("Chute um número"))

//     console.log(`O número chutado foi: ${numeroChutado}`)

//     arrayDeChutes.push(numeroChutado)

//     if (numeroChutado > numeroEscolhido) {
//         console.log('ERROU! O número escolhido é Menor')
//     } else if (numeroChutado < numeroEscolhido) {
//         console.log('ERROU! O número escolhido é Maior!')
//     }
// }

// console.log('ACERTOU!')
// console.log(`O número de tentativas foi: ${arrayDeChutes.length}`)

// Desafio 2

let numeroEscolhido = Math.floor(Math.random()*50)+1

// console.log(numeroEscolhido)
console.log("Tente adivinhar o número. Vamos Começar!")

let numeroChutado = 0
let arrayDeChutes = []

while (numeroChutado !== numeroEscolhido) {
    numeroChutado = Number(prompt("Chute um número"))

    console.log(`O número chutado foi: ${numeroChutado}`)

    arrayDeChutes.push(numeroChutado)

    if (numeroChutado > numeroEscolhido) {
        console.log('ERROU! O número escolhido é Menor')
    } else if (numeroChutado < numeroEscolhido) {
        console.log('ERROU! O número escolhido é Maior!')
    }
}

console.log('ACERTOU!')
console.log(`O número de tentativas foi: ${arrayDeChutes.length}`)

// achei uma alteração bem simples.

