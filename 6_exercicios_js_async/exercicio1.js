function calculator(a, b, f) {
    return f(a, b)
}

function sum(a, b) {
    return a + b
}

function minus(a, b) {
    return a - b
}

console.log(calculator(31, 12, sum))
console.log(calculator(11, 25, minus))