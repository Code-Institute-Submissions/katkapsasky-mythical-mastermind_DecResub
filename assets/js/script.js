// Defines variables for the quiz on play.html
let startButton = document.getElementById('start-button');
let nextButton = document.getElementById('next-button');
let quizQuestions = document.getElementById('quiz-questions');
quizQuestions.style.display = 'none'
let questionElement = document.getElementById('questions');
let answerButtonsElement = document.getElementById('answer-options');
let optionButtons = answerButtonsElement.querySelectorAll("button");
let progressText = document.getElementById('progress-text');
let progressBarFull = document.getElementById('progress-bar-full');
let questionCounter = 0;
let maxQuestions = 10;

let shuffledQuestions, currentQuestionIndex

// Adds Event Listeners for the Start and Next Question buttons
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++;
    setNextQuestion();
});

// Increments player's total score
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * Shuffles questions
 * Hides Start button once the player clicks on it
 */
function startGame() {
    questionCounter = 0
    startButton.style.visibility = 'hidden'
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizQuestions.style.display = 'block'
    setNextQuestion()
}

/**
 * Sets next question if there are any remaining
 * Stores player's score in local storage
 * Logs player progress
 */
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

    if(shuffledQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    } 

    questionCounter++ 
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%
    `
}

// Hides next button once questions run out
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
        incrementScore();
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

