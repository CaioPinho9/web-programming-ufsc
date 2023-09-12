function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    const period = hours >= 12 ? 'PM' : 'AM'
    const hoursFormatadas = hours > 12 ? hours - 12 : hours
    const minutesFormated = minutes < 10 ? `0${minutes}` : minutes
    const secondsFormated = seconds < 10 ? `0${seconds}` : seconds

    const dateFormated = `${hoursFormatadas} ${period} : ${minutesFormated}m : ${secondsFormated}s`

    console.log(dateFormated)
}