function whichInterval() {
    let number = window.prompt("Insira um valor: ")
    let answer

    if (30 <= number && number <= 50) {
        answer = `${number} está no intervalo [30,50]`
    } else if (60 <= number && number <= 100) {
        answer = `${number} está no intervalo [60,100]`
    } else {
        answer = "não está em nenhum dos intervalos"
    }

    window.alert(answer)
}
