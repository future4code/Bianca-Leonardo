/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo (a) ao jogo BlackJack")

if (confirm("Quer iniciar uma nova partida?")) {
   let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let cartaComputador1 = comprarCarta()
   let cartaComputador2 = comprarCarta()

   let totalUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   let totalComputador = cartaComputador1.valor + cartaComputador2.valor

   console.log(`Usuário - Cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - Pontuação ${totalUsuario}`)
   console.log(`Computador - Cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - Pontuação ${totalComputador}`)

   if (totalUsuario > totalComputador) {
      console.log('O usuário venceu!')
   } else if (totalUsuario < totalComputador) {
      console.log('O Computador venceu!')
   } else {
      console.log('Empate!')
   }
} else {
   console.log('O jogo acabou')
}