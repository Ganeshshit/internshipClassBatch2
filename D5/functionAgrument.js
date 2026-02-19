function sum(a, b) {
    return a + b
}
function multiply(a, b) {
    return a * b
}
function subsTractio(a, b) {
    return a - b;
}
function division(a, b) {
    return a / b;
}
function deOperation(a, b, Op) {
    return Op(a, b)
}

console.log(deOperation(2, 3, sum))



