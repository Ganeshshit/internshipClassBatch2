let quiz = [];
function addQuestion() {
    let questionText = document.getElementById("question").value;
    let options = document.querySelectorAll(".option");
    let correctIndex = document.getElementById("correct").value;

    if (!questionText || correctIndex === "") {
        alert("Please fill all fields");
        return;
    }

    let optionValues = [];
    for (let i = 0; i < options.length; i++) {
        optionValues.push(options[i].value);
    }

    quiz.push({
        question: questionText,
        options: optionValues,
        correct: correctIndex
    });

    alert("Question Added!");

    document.getElementById("question").value = "";
    options.forEach(opt => opt.value = "");
    document.getElementById("correct").value = "";
}
function generateQuiz() {
    let quizForm = document.getElementById("quizForm");
    quizForm.innerHTML = "";

    quiz.forEach((q, index) => {
        let div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `<p><b>${index + 1}. ${q.question}</b></p>`;
        q.options.forEach((opt, i) => {
            div.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${i}">
          ${opt}
        </label><br>
      `;
        });

        quizForm.appendChild(div);
    });
}

function submitQuiz() {
    let score = 0;

    quiz.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value == q.correct) {
            score++;
        }
    });

    document.getElementById("score").innerText =
        `Your Score: ${score} / ${quiz.length}`;
}
