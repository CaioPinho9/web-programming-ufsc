function consoleAtrasado(mensagem, atraso) {
    setTimeout(console.log(mensagem), atraso)
}

console.log("Olá")
consoleAtrasado("Teste", 10000)
console.log("Bye")

// Olá
// Teste
// Bye
