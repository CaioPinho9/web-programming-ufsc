function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    //edite esta função!
    let regiaoFiscal
    console.log(cpfInformado)

    const cpfFormatado = cpfInformado.padStart(11, '0');

    const numeroDaRegiao = Number(cpfFormatado.charAt(8))

    console.log(numeroDaRegiao)

    const regiaoMap = [
        "RS",
        "DF, GO, MT, MS e TO",
        "AC, AP, AM, PA, RO e RR",
        "CE, MA e PI",
        "AL, PB, PE e RN",
        "BA e SE",
        "MG",
        "ES e RJ",
        "SP",
        "PR e SC",
    ]

    regiaoFiscal = regiaoMap[numeroDaRegiao]

    //----------------------------
    return regiaoFiscal
}


function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
    let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: " + regiaoFiscal
}
