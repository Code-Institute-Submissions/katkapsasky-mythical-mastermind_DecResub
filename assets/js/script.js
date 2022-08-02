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
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function resetState() {
    nextButton.style.visibility = 'hidden'
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
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
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)
        });
    });
}


function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex+1) {
        nextButton.style.visibility = 'visible'
    }   else {
        startButton.innerText = 'Restart'
        startButton.style.visibility = 'visible'
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}