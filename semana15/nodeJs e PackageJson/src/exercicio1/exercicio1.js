// a)
// const frase = process.argv[2]
// console.log(frase)

// b)
// const nome = process.argv[2]
// const idade = process.argv[3]

// console.log(`Olá, ${nome}! Você tem ${idade} anos`)

// c)
const nome = process.argv[2]
const idade = process.argv[3]
const idadeDaquiSeteAnos = Number(idade) +7

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeDaquiSeteAnos}`)
