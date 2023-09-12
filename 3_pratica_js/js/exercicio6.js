function reverseString() {
    let string = window.prompt("Insira um valor: ")

    const charArray = string.split('')

    // Inverte o array de caracteres
    const reversedArray = charArray.reverse()

    // Junta os caracteres do array invertido em uma string
    const reversedString = reversedArray.join('')

    console.log(reversedString)
}