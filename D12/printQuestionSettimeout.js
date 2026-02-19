
const promt = require('prompt-sync')();


let questions = [{
    question: "What is your name?",
    answer: "My name is John."
}, {
    question: "What is your age?",
    answer: "I am 30 years old."

}]
function askQuestion(index) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(questions[index].question);
            resolve();
        }, 1000);
    });
}
function readAnswer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const answer = promt("Your answer: ");
            resolve(answer);
        }, 1000);
    });
}
function answerQuestion(index) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(questions[index].answer);
            resolve();
        }, 1000);
    });
}

// askQuestion(0).then(() => {
//     return readAnswer();
// }).then((answer) => {
//     console.log("Your answer was:", answer);
//     return answerQuestion(0);
// }).then(() => {
//     return askQuestion(1);

// }).then(() => {
//     return readAnswer();
// }).catch((err) => {
//     console.error("An error occurred:", err);
// });