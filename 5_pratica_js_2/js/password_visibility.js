function mostrarSenha() {
    document.getElementById('login-password').type = 'text';
}

function ocultarSenha() {
    document.getElementById('login-password').type = 'password';
    const olhoImg = document.getElementById('olho')
    olhoImg.src = "https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-14-512.png";

}

function toggleSenha() {
    const passwordField = document.getElementById('login-password')
    const olhoImg = document.getElementById('olho')

    if (passwordField.type === "password") {
        passwordField.type = "text";
        olhoImg.src = "https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-15-512.png";
    } else {
        passwordField.type = "password";
        olhoImg.src = "https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-14-512.png";
    }
}