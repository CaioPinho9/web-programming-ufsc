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

function validaTextoEmBranco(inputField, displayFieldId, descricao) {
    const displayField = document.getElementById(displayFieldId)
    if (!inputField.value) {
        inputField.setCustomValidity("Invalid field.");
        inputField.classList.add("status-fail");
        inputField.classList.remove("status-ok")
        displayField.innerHTML = "Texto em Branco"
        displayField.style.display = "block";

    } else {
        inputField.setCustomValidity("");
        inputField.classList.remove("status-fail");
        displayField.style.display = "none";
        inputField.classList.add("status-ok")
    }
}

function validarCPF(inputField) {
    const displayField = document.getElementById("statusCPF")
    if (!isValidCpf(displayField.value)) {
        inputField.setCustomValidity("Invalid field.");
        inputField.classList.add("status-fail");
        inputField.classList.remove("status-ok")
        displayField.innerHTML = "Cpf inválido"
        displayField.style.display = "block";

    } else {
        inputField.setCustomValidity("");
        inputField.classList.remove("status-fail");
        displayField.style.display = "none";
        inputField.classList.add("status-ok")
    }
}
