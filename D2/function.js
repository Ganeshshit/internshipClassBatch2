let globalVar = "I am a global variable";

function displayVariables() {
    let localVar = "I am a local variable";
    console.log(globalVar); 
    console.log(localVar);
}
// function geet(name) {
//     console.log("Goode Morinig " + name);
// }



// geet("Ganesh");
// geet("Ramesh");
// geet("Suresh");
// function add(a, b) {
//     return a + b;
// }

// let sum = add(10, 20);
// console.log("Sum is: " + sum);
function diplayGlobalVar() {
    console.log("Global Variable: " + globalVar);
}

function inputOutputExample(a, b) {
    let sum = a + b;
    return sum;
}
let result=inputOutputExample(5,10);
console.log("Result of inputOutputExample is: " + inputOutputExample(5, 10));
displayVariables();
diplayGlobalVar();