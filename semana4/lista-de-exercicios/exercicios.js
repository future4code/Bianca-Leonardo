//Exercício 1

function inverteArray(array) {
   // implemente sua lógica aqui
   let novoArray = array.map((item, indice, array) => {
      return array[array.length - indice - 1]
   })
   return novoArray
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   // implemente sua lógica aqui
   let novoArray = []

   array.map((item) => {
      if (item % 2 === 0) {
         novoArray.push(item * item)
      }
   })
   return novoArray
}

//Exercício 3

function retornaNumerosPares(array) {
   // implemente sua lógica aqui
   let novoArray = []

   for (let i of array) {
      if (array[i] % 2 === 0) {
         novoArray.push(array[i])
      }
   }
   return novoArray 
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maiorNumero = 0

   array.map((item) => {
      if (item > maiorNumero) {
         maiorNumero = item
      }
   })
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   // implemente sua lógica aqui

   let quantidadeArray = array.length

   return quantidadeArray
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui

   let booleanos = [false, false, true, true, true]

   return booleanos
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   let nNumerosPares = []

   for (let i = 0; nNumerosPares.length < n; i++) {
      if (i % 2 === 0) {
         nNumerosPares.push(i)
      }
   }
   return nNumerosPares
}
   

// Exercício 8

function checaTriangulo(a, b, c) {
   // implemente sua lógica aqui
   if (a === b && b === c) {
      return "Equilátero"
   } else if (a === b || b === c || c === a) {
      return 'Isósceles'
   } else {
      return 'Escaleno'
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let comparador = {
      maiorNumero: 0,
      maiorDivisivelporMenor: false,
      diferenca: 0,
   }

   if (num1 > num2) {
      comparador.maiorNumero = num1
   } else {
      comparador.maiorNumero = num2
   }
   if (comparador.maiorNumero % 2 === 0) {
      comparador.maiorDivisivelporMenor = true
   }
   
   let diferencaDoisNumeros = num1 - num2
   if (diferencaDoisNumeros < 0) {
      comparador.diferenca = diferencaDoisNumeros * -1
   }

   return comparador
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
   let menorNumero = 100000
   let maiorNumero = 0
   let segundoMenor = 1000000
   let segundoMaior = 0
   let indiceMaior = 0
   let indiceMenor = 0
   let novoArray = []

   for (const i of array) {
      if (i < menorNumero) {
         menorNumero = i
         indiceMenor = array.indexOf(menorNumero)
      }

      if (i > maiorNumero) {
         maiorNumero = i
         indiceMaior = array.indexOf(maiorNumero)
      }
   }

   array.splice(indiceMaior, 1)
   array.splice(indiceMenor, 1)

   for (const i of array) {
      if (i < segundoMenor) {
         segundoMenor = i
      }

      if (i > segundoMaior) {
         segundoMaior = i
      }
   }

   novoArray.push(segundoMaior)
   novoArray.push(segundoMenor)

   return novoArray
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui

   let arrayCrescente = array.sort((a, b) => {
      return a - b
   })
   return arrayCrescente
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   let filmeFavoritoAstrodev = {
      nome: '',
      ano: 0,
      diretor: '',
      atores: []
   }

   filmeFavoritoAstrodev.nome = 'O Diabo Veste Prada'
   filmeFavoritoAstrodev.ano = 2006
   filmeFavoritoAstrodev.diretor = 'David Frankel'
   filmeFavoritoAstrodev.atores = ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']

   return filmeFavoritoAstrodev
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   let filmeFavoritoAstrodev = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }

   return `Venha assistir ao filme ${filmeFavoritoAstrodev.nome}, de ${filmeFavoritoAstrodev.ano}, dirigido por ${filmeFavoritoAstrodev.diretor} e estrelado por ${filmeFavoritoAstrodev.atores[0]}, ${filmeFavoritoAstrodev.atores[1]}, ${filmeFavoritoAstrodev.atores[2]}, ${filmeFavoritoAstrodev.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   let retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   let objetoPessoa = {
      nome: "Astrodev",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
   }

   let novaPessoa = {
      ...objetoPessoa,
      nome: 'ANÔNIMO'
   }
   return novaPessoa

}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   let adultos = arrayDePessoas.filter((pessoa) => {
      if (pessoa.idade >= 20) {
         return true
      }
   })
   return adultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   let adultos = arrayDePessoas.filter((pessoa) => {
      if (pessoa.idade < 20) {
         return true
      }
   })
   return adultos
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   let arrayMultiplica = []

   array.map((item) => {
      arrayMultiplica.push(item * 2)
   })
   return arrayMultiplica
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
   let arrayMultiplicaString = []

   array.map((item) => {
      arrayMultiplicaString.push(String(item * 2))
   })

   return arrayMultiplicaString
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   let stringArray = []

   array.map((item) => {
      if (item % 2 === 0) {
         stringArray.push(`${item} é par`)
      } else {
         stringArray.push(`${item} é ímpar`)
      }
   })
   return stringArray
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   let pessoasAutorizadas = pessoas.filter((pessoa) => {
      if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
         return true
      } 
   })
   return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   let pessoasNaoAutorizadas = pessoas.filter((pessoa) => {
      if (pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60) {
         return true
      }
   })
   return pessoasNaoAutorizadas
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

//Exercício 19, letra A

function ordenaPorNome() {
   for(let i = 0; i < consultasNome.length; i++) {
      for(let j = 0; j < consultasNome.length - i - 1; j++) {
        if(consultasNome[j].nome > consultasNome[j + 1].nome) {
          const temp = consultasNome[j]
          consultasNome[j] = consultasNome[j + 1]
          consultasNome[j + 1] = temp
        }
      }
    }
    return consultasNome
}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {
   for(let i = 0; i < consultasData.length; i++) {
      for(let j = 0; j < consultasData.length - i - 1; j++) {
  
        const arrayData1 = consultasData[j].dataDaConsulta.split('/')
        const dia1 = Number(arrayData1[0])
        const mes1 = Number(arrayData1[1])
        const ano1 = Number(arrayData1[2])
  
        const arrayData2 = consultasData[j + 1].dataDaConsulta.split('/')
        const dia2 = Number(arrayData2[0])
        const mes2 = Number(arrayData2[1])
        const ano2 = Number(arrayData2[2])
  
        const data1 = new Date(ano1, mes1 -1, dia1).getTime()
        const data2 = new Date(ano2, mes2-1, dia2).getTime()
  
        if(data1 > data2) {
          const temp = consultasData[j]
          consultasData[j] = consultasData[j + 1]
          consultasData[j + 1] = temp
        }
      }
    }
    return consultasData
}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
   contas.forEach((conta) => {
      let totalDeCompras = 0
      conta.compras.forEach((valor) => {
        totalDeCompras += valor
      })
      conta.saldoTotal -= totalDeCompras
    })
    return contas
}