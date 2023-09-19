function mostrarApenasHome() {
    document.getElementById('divHome').style.display = 'block';
    document.getElementById('login-body').style.display = 'none';
    document.getElementById('nova-conta').style.display = 'none';
}

function mostrarApenasLogin() {
    document.getElementById('login-body').style.display = 'block';
    document.getElementById('divHome').style.display = 'none';
    document.getElementById('nova-conta').style.display = 'none';
    limparInputsDisplays()
}

function mostrarApenasConta() {
    document.getElementById('nova-conta').style.display = 'block';
    document.getElementById('divHome').style.display = 'none';
    document.getElementById('login-body').style.display = 'none';
    limparInputsDisplays()
}

function limparInputsDisplays() {
    const loginNomeInput = document.getElementById("login-email")
    const loginSenhaInput = document.getElementById("login-password")

    const nomeInput = document.getElementById("criarNome")
    const sobrenomeInput = document.getElementById("criarSobrenome")
    const cpfInput = document.getElementById("criarCpf")
    const emailInput = document.getElementById("criarEmail")
    const senhaInput = document.getElementById("criarSenha")
    const senhaRepetidaInput = document.getElementById("criarSenhaRepetida")

    const nomeDisplay = document.getElementById("statusNome")
    const sobrenomeDisplay = document.getElementById("statusSobrenome")
    const cpfDisplay = document.getElementById("statusCPF")
    const emailDisplay = document.getElementById("statusEmail")
    const senhaDisplay = document.getElementById("statusSenha")
    const senhaRepetidaDisplay = document.getElementById("statusRepitaSenha")

    resetarInputDisplay(loginNomeInput, nomeDisplay)
    resetarInputDisplay(loginSenhaInput, nomeDisplay)

    resetarInputDisplay(nomeInput, nomeDisplay)
    resetarInputDisplay(sobrenomeInput, sobrenomeDisplay)
    resetarInputDisplay(cpfInput, cpfDisplay)
    resetarInputDisplay(emailInput, emailDisplay)
    resetarInputDisplay(senhaInput, senhaDisplay)
    resetarInputDisplay(senhaRepetidaInput, senhaRepetidaDisplay)
}

function validarEmail() {
    const emailField = document.getElementById('login-email');
    const email = emailField.value;
    if (!(email.includes("@") && email.split("@").length === 2)) {
        emailField.setCustomValidity("Invalid field.");
        emailField.classList.add("status-fail");
    } else {
        emailField.setCustomValidity("");
        emailField.classList.remove("status-fail");
        validarBotao()
    }
}

function validarBotao() {
    const emailField = document.getElementById('login-email');
    const passwordField = document.getElementById('login-password');
    const button = document.getElementById("botaoLogin");

    button.disabled = !(emailField.value && emailField.validity.valid && passwordField.value);
}

function resetarInputDisplay(inputField, displayField) {
    inputField.setCustomValidity("");
    inputField.classList.remove("status-fail");
    inputField.classList.remove("status-ok");
    inputField.value = ""
    displayField.style.display = "none";
}

function toggleValidity(inputField, displayField, isValid, errorMessage) {
    if (!isValid) {
        inputField.setCustomValidity("Invalid field.");
        inputField.classList.add("status-fail");
        if (displayField) {
            inputField.classList.remove("status-ok")
            displayField.innerHTML = errorMessage
            displayField.style.display = "block";
        }
    } else {
        inputField.setCustomValidity("");
        inputField.classList.remove("status-fail");
        if (displayField) {
            inputField.classList.add("status-ok")
            displayField.style.display = "none";
        }
    }
}

function validaTextoEmBranco(inputField, displayFieldId, descricao) {
    let displayField = null
    if (displayFieldId) {
        displayField = document.getElementById(displayFieldId)
    }
    const isValid = inputField.value
    toggleValidity(inputField, displayField, isValid, `${descricao} em branco`)
}

class Cpf {
    constructor(cpf) {
        this.cpf = cpf
        this.ehValidoCpf(this.cpf)
    }

    digitoVerificadorEhValido(cpf, digito) {
        const digitoVerificador = cpf.charAt(digito)

        let soma = 0
        for (let i = 0; i < digito; i++) {
            const valor = Number(cpf[i])
            console.log(valor, (digito + 1) - i)
            soma += valor * ((digito + 1) - i)
        }

        let resto = (soma * 10) % 11

        resto = resto !== 10 ? resto : 0

        return digitoVerificador == resto
    }

    ehValidoCpf(cpf) {
        if (cpf.length !== 11) {
            throw new Error("Cpf deve ter 11 caracteres")
        }
        if (!/^\d+$/.test(cpf)) {
            throw new Error("Cpf deve ter apenas números")
        }
        const charSet = new Set(cpf)
        if (charSet.size === 1) {
            throw new Error("Cpf deve ter dígitos diferentes")
        }
        if (!this.digitoVerificadorEhValido(cpf, 9)) {
            throw new Error("Cpf tem o primeiro digito verificador inválido")
        }
        if (!this.digitoVerificadorEhValido(cpf, 10)) {
            throw new Error("Cpf tem o segundo digito verificador inválido")
        }

        return true
    }
}

function validarCPF(inputField) {
    const displayField = document.getElementById("statusCPF")
    const cpf = inputField.value === undefined ? "" : inputField.value
    let isValid
    let message
    try {
        new Cpf(cpf)
        isValid = true
    } catch (error) {
        isValid = false
        message = error.message
    }

    toggleValidity(inputField, displayField, isValid, message)
}

function validarSenha(inputField, displayFieldId, descricao) {
    validaTextoEmBranco(inputField, displayFieldId, descricao)

    const inputSenhaField = document.getElementById("criarSenha")
    const inputRepetidaField = document.getElementById("criarSenhaRepetida")

    const displaySenhaField = document.getElementById("statusSenha")
    const displayRepetidaField = document.getElementById("statusRepitaSenha")

    if (inputSenhaField.value && inputRepetidaField.value) {
        const isValid = inputSenhaField.value === inputRepetidaField.value
        toggleValidity(inputSenhaField, displaySenhaField, isValid, "Senhas devem ser iguais")
        toggleValidity(inputRepetidaField, displayRepetidaField, isValid, "Senhas devem ser iguais")
    }
}

function validarCriarEmail() {
    const inputEmailField = document.getElementById('criarEmail');
    const displayEmailField = document.getElementById('statusEmail');
    const email = inputEmailField.value;
    const isValid = email.includes("@") && email.split("@").length === 2
    toggleValidity(inputEmailField, displayEmailField, isValid, "Email inválido")
}

function validarBotaoCriar() {
    const nomeInput = document.getElementById("criarNome")
    const sobrenomeInput = document.getElementById("criarSobrenome")
    const cpfInput = document.getElementById("criarCpf")
    const emailInput = document.getElementById("criarEmail")
    const senhaInput = document.getElementById("criarSenha")
    const senhaRepetidaInput = document.getElementById("criarSenhaRepetida")
    const criarButton = document.getElementById("criarButton")

    let isValid = true

    isValid &&= nomeInput.value && nomeInput.validity.valid
    isValid &&= sobrenomeInput.value && sobrenomeInput.validity.valid
    isValid &&= cpfInput.value && cpfInput.validity.valid
    isValid &&= emailInput.value && emailInput.validity.valid
    isValid &&= senhaInput.value && senhaInput.validity.valid
    isValid &&= senhaRepetidaInput.value && senhaRepetidaInput.validity.valid

    criarButton.disabled = !isValid
}

class Conta {
    constructor(nome, sobrenome, cpf, email, senha) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = new Cpf(cpf)
        this.email = email
        this.senha = senha
    }
}

function criarConta() {
    const nome = document.getElementById("criarNome").value
    const sobrenome = document.getElementById("criarSobrenome").value
    const cpf = document.getElementById("criarCpf").value
    const email = document.getElementById("criarEmail").value
    const senha = document.getElementById("criarSenha").value

    const conta = new Conta(nome, sobrenome, cpf, email, senha)
    console.log(conta)
}