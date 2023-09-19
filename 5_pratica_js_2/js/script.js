function mostrarApenasHome() {
    document.getElementById('divHome').style.display = 'block';
    document.getElementById('login-body').style.display = 'none';
    document.getElementById('nova-conta').style.display = 'none';
}

function mostrarApenasLogin() {
    document.getElementById('login-body').style.display = 'block';
    document.getElementById('divHome').style.display = 'none';
    document.getElementById('nova-conta').style.display = 'none';
}

function mostrarApenasConta() {
    document.getElementById('nova-conta').style.display = 'block';
    document.getElementById('divHome').style.display = 'none';
    document.getElementById('login-body').style.display = 'none';
}

function limparInputs() {
    const loginNomeInput = document.getElementById("login-email")
    const loginSenhaInput = document.getElementById("login-password")

    const nomeInput = document.getElementById("criarNome")
    const sobrenomeInput = document.getElementById("criarSobrenome")
    const cpfInput = document.getElementById("criarCpf")
    const emailInput = document.getElementById("criarEmail")
    const senhaInput = document.getElementById("criarSenha")
    const senhaRepetidaInput = document.getElementById("criarSenhaRepetida")

    loginNomeInput.value = ""
    loginSenhaInput.value = ""

    nomeInput.value = ""
    sobrenomeInput.value = ""
    cpfInput.value = ""
    emailInput.value = ""
    senhaInput.value = ""
    senhaRepetidaInput.value = ""
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

function toggleValidity(inputField, displayField, isValid, errorMessage) {
    if (!isValid) {
        inputField.setCustomValidity("Invalid field.");
        inputField.classList.add("status-fail");
        inputField.classList.remove("status-ok")
        displayField.innerHTML = errorMessage
        displayField.style.display = "block";

    } else {
        inputField.setCustomValidity("");
        inputField.classList.remove("status-fail");
        displayField.style.display = "none";
        inputField.classList.add("status-ok")
    }
}

function validaTextoEmBranco(inputField, displayFieldId, descricao) {
    const displayField = document.getElementById(displayFieldId)
    const isValid = inputField.value
    toggleValidity(inputField, displayField, isValid, `${descricao} em branco`)
}

function digitoVerificadorEhValido(cpf, digito) {
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

function isValidCpf(cpf) {
    let isValid = true

    isValid &&= cpf.length === 11

    isValid &&= /^\d+$/.test(cpf)

    const charSet = new Set(cpf)
    isValid &&= charSet.size !== 1

    isValid &&= digitoVerificadorEhValido(cpf, 9)
    isValid &&= digitoVerificadorEhValido(cpf, 10)

    return isValid
}

function validarCPF(inputField) {
    const displayField = document.getElementById("statusCPF")
    const cpf = inputField.value === undefined ? "" : inputField.value
    const isValid = isValidCpf(cpf)
    toggleValidity(inputField, displayField, isValid, "Cpf inválido")
}

function validarSenha() {
    const inputSenhaField = document.getElementById("criarSenha")
    const inputRepetidaField = document.getElementById("criarSenhaRepetida")

    const displaySenhaField = document.getElementById("statusSenha")
    const displayRepetidaField = document.getElementById("statusRepitaSenha")

    const isValid = !inputSenhaField.value || !inputRepetidaField.value || inputSenhaField.value === inputRepetidaField.value
    toggleValidity(inputSenhaField, displaySenhaField, isValid, "Senhas devem ser iguais")
    toggleValidity(inputRepetidaField, displayRepetidaField, isValid, "Senhas devem ser iguais")
}

function validarCriarEmail() {
    const inputEmailField = document.getElementById('criarEmail');
    const displayEmailField = document.getElementById('statusEmail');
    const email = inputEmailField.value;
    const isValid = email.includes("@") && email.split("@").length === 2
    toggleValidity(inputEmailField, displayEmailField, isValid, "Email invalid")
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