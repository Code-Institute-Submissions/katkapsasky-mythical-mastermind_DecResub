let startButton = document.getElementById('start-button');
let nextButton = document.getElementById('next-button');
let quizQuestions = document.getElementById('quiz-questions');
quizQuestions.style.display = 'none'
let questionElement = document.getElementById('questions');
let answerButtonsElement = document.getElementById('answer-options');
let optionButtons = answerButtonsElement.querySelectorAll("button");

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
    // currentQuestionIndex + 1;
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.style.visibility = 'hidden'
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizQuestions.style.display = 'block'
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(function(answer, outerIndex) { // loop over question answers from array
        optionButtons.forEach(function(button, innerIndex) { // loop over html buttons
            if (outerIndex === innerIndex) {
                // console.log(button, answer);
                button.innerText = answer.text;
                button.dataset.correct = answer.correct;
            }
        });
    });
}

function selectAnswer() {

}
