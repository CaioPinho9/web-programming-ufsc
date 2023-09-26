var callback = function () {
    console.log("Estou na função de callback");
}
console.log("Iniciei")
setTimeout(callback, 5000);
console.log("Estou após o setTimeout")

// Iniciei
// Estou após o setTimeout
// Estou na função de callback