function alertWithouFirstAndLastChar() {
    let completeString = window.prompt("Insira um valor: ")

    formatedString = completeString.substring(1, completeString.length - 1)

    window.alert(formatedString)
}