function haOnzeDigitos(cpf) {
    //---- edite aqui para a validação do exercício 9a
    return cpf.length === 11
}

function todosOsOnzeDigitosSaoNumeros(cpf) {
    //---- edite aqui para a validação do exercício 9b
    return /^\d+$/.test(cpf)
}

function osOnzeNumerosSaoDiferentes(cpf) {
    //---- edite aqui para a validação do exercício 9c
    const charSet = new Set(cpf)
    return charSet.size !== 1
}

function oPrimeiroDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9d
    const digitoVerificador = cpf.charAt(9)
    console.log(digitoVerificador)

    let soma = 0
    for (let i = 0; i < 9; i++) {
        const valor = Number(cpf[i])
        console.log(valor, 10 - i)
        soma += valor * (10 - i)
    }

    let resto = (soma * 10) % 11

    resto = resto !== 10 ? resto : 0

    console.log(resto)

    return digitoVerificador == resto
}

function oSegundoDigitoVerificadorEhValido(cpf) {
    //---- edite aqui para a validação do exercício 9e
    const digitoVerificador = cpf.charAt(10)
    console.log(digitoVerificador)

    let soma = 0
    for (let i = 0; i < 10; i++) {
        const valor = Number(cpf[i])
        console.log(valor, 11 - i)
        soma += valor * (11 - i)
    }

    let resto = (soma * 10) % 11

    resto = resto !== 10 ? resto : 0

    console.log(resto)

    return digitoVerificador == resto
}

function isValidCpf(cpf) {
    let isValid = True

    isValid &= haOnzeDigitos(cpf)
    isValid &= todosOsOnzeDigitosSaoNumeros(cpf) && validarCPF("onzeDigitos", cpf)
    isValid &= osOnzeNumerosSaoDiferentes(cpf) && validarCPF("onzeSaoNumeros", cpf)
    isValid &= oPrimeiroDigitoVerificadorEhValido(cpf) && validarCPF("naoSaoTodosIguais", cpf)
    isValid &= oSegundoDigitoVerificadorEhValido(cpf) && validarCPF("verificador10", cpf)

    return isValid
}