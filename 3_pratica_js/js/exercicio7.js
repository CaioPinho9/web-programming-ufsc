function listarCasos() {
    let todosOsCasos = []
    //--- inclua seu algoritmo aqui ---

    for (let i = 0; i < 100; i++) {
        if (isThisCase(i)) {
            todosOsCasos.push(i ** 2)
        }
    }

    //--- ---
    return todosOsCasos
}

function isThisCase(number) {
    const squared = String(number ** 2)

    const charArray = squared.split("")

    let firstNumber = "", secondNumber = ""

    for (let i = charArray.length - 1; i >= 0; i--) {
        if (charArray.length - i <= 2) {
            secondNumber = charArray[i] + secondNumber
        } else {
            firstNumber = charArray[i] + firstNumber
        }
    }

    return (Number(firstNumber) + Number(secondNumber) === Number(squared))
}

function tratadorDeCliqueExercicio7() {
    const todosOsCasos = listarCasos()
    console.log(todosOsCasos.length)
    adicionarTodosOsCasos(todosOsCasos)
}


function adicionarCaso(caso, tableRowHead, tableRow1, tableRow2) {
    let th = document.createElement("th")
    th.textContent = caso

    let temp = (caso * caso).toString();

    let td1 = document.createElement("td")
    td1.innerHTML = caso + "<sup>2</sup> = " + temp

    let td2 = document.createElement("td")

    begin = temp.substring(0, 2)
    end = temp.substring(2, 4)
    td2.textContent = begin + "+" + end + " = " + caso

    tableRowHead.appendChild(th)
    tableRow1.appendChild(td1)
    tableRow2.appendChild(td2)


}


function addTitle(areaParaResultados) {
    let h3Exercicio7 = document.createElement("h3")
    h3Exercicio7.textContent = "Resultado"
    areaParaResultados.appendChild(h3Exercicio7)
}


function addErro(areaParaResultados) {
    let pQualquer = document.createElement("p")
    pQualquer.innerHTML = "Atualize o código da função <code>listarCasos()</code> antes de rodar..."
    areaParaResultados.appendChild(pQualquer)
}

function adicionarTodosOsCasos(todosOsCasos) {
    let areaParaResultados = document.getElementById("areaParaResultados")
    addTitle(areaParaResultados)

    if (todosOsCasos.length == 0) {
        return addErro(areaParaResultados)
    }

    let table = document.createElement("table")
    let tableRowHead = document.createElement("tr")
    let tableRow1 = document.createElement("tr")
    let tableRow2 = document.createElement("tr")
    table.appendChild(tableRowHead)
    table.appendChild(tableRow1)
    table.appendChild(tableRow2)
    for (const i in todosOsCasos) {
        adicionarCaso(todosOsCasos[i], tableRowHead, tableRow1, tableRow2)
    }
    areaParaResultados.appendChild(table)

}


