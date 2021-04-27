// Exercício 1 de interpretação

// a.

// 10
// 50

// b. nada. pois não informamos onde a função deveria retornar


// Exercício 2 de interpretação

// a.
// Darvas
// Caio
// pois no for diz que o indice é tem que ser menor de 2

// b.
// Amanda
// Caio


// Exercício 3 de interpretação

// cria uma array apenas com números pares
// numPar


// Exercício 4 de escrita

// a.

// function sobreMim(){
//     console.log("Meu nome é Bianca, tenho 28 anos e moro no Rio de Janeiro e sou estudante")
// }

// sobreMim()

// b.

// function sobreMim(nome, idade, cidade, estudante) {

//     if (estudante === true) {
//         console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e sou estudante`)
//     } else {
//         console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e não sou estudante`)
//     }
// }

// sobreMim("Bianca", 28, "Rio de Janeiro", false)


// Exercício 5 de escrita


// a.

// function somarDoisNumeros(num1, num2) {
//     return num1 + num2
// }

// console.log(somarDoisNumeros(5, 7))


// b.

// function comparaDoisNumeros(num1, num2) {
//     if (num1 >= num2) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(comparaDoisNumeros(5, 5))

// c.

// function repeteMensagem(mensagem) {
//     for (let index = 0; index < 10; index++) {
//         console.log(mensagem)
        
//     }
// }

// repeteMensagem("Olá, tudo bem?")


// Exercício 6 de escrita

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a.

// function tamanhoArray(array) {
//     console.log(array.length)
// }

// tamanhoArray(array)

// b.

// function verificaPar(num) {
//     if (num % 2 === 0) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// verificaPar(8)

// c.

// let par = 0

// function verificaPar(array) {
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] % 2 === 0) {
//             par = par + 1
//         } 
        
//     }
//     console.log(par)
// }

// verificaPar(array)


// d.


// function lerNumero(num) {
//     return verificaPar()
// }

// lerNumero(6)


// DESAFIO 1

// 1.
// let imprimirMsg = (msg) => {
//     console.log(msg)
// }

// // 2.
// let doisValores = (valor1, valor2) => {
//     soma = valor1 + valor2
//     imprimirMsg(soma)
// }

// doisValores(7, 4)


// DESAFIO 2

// a.

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// let numerosPar = []

// function arrayPar(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             numerosPar.push(array[i] * 2)
//         }
//     }
//     console.log(numerosPar)
// }

// arrayPar(numeros)


// b.

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// let maiorNumero = 0

// function MaiorNumeroArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (maiorNumero < array[i]) {
//             maiorNumero = array[i]
//         }
//     }
//     console.log(maiorNumero)
// }

// MaiorNumeroArray(numeros)

// c.

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// let maiorNumero = 0

// function MaiorNumeroArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (maiorNumero < array[i]) {
//             maiorNumero = array[i]
//         }
//     }
//     console.log(numeros.indexOf(maiorNumero))
// }

// MaiorNumeroArray(numeros)

// d.

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// let novoArrayNumeros = []

// function inverterArray(array) {
//     novoArrayNumeros = array.reverse()
//     console.log(novoArrayNumeros)
// }

// inverterArray(numeros)