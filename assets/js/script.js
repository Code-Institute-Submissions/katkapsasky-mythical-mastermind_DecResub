let startButton = document.getElementById('start-button');
let quizQuestions = document.getElementById('quiz-questions');
quizQuestions.style.display = 'none'
let questionElement = document.getElementById('questions');
let answerButtonsElement = document.getElementById('answer-options');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

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
}

function selectAnswer() {

}

const questions = [
    {
        question: 'Who was the chief god in greek mythology?',
        answers: [
            {text: 'Zeus', correct: true},
            {text: 'Apollo', correct: false},
            {text: 'Poseidon', correct: false},
            {text: 'Hades', correct: false},
        ]
    }
]