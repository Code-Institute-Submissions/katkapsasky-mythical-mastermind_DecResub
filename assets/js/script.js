let startButton = document.getElementById('start')
let quiz = document.getElementById('quiz')
quiz.style.display = 'none'
let answerOptions = document.querySelectorAll('.answer')
let questionEl = document.getElementById('question')
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')

let progressText = document.getElementById('progress-text');
let progressBarFull = document.getElementById('progress-bar-full');
let questionCounter = 0;
let maxQuestions = 10;

let submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

startButton.addEventListener('click', loadQuiz)

function loadQuiz() {
    
    quiz.style.display = 'block'
    startButton.style.display = 'none'
    deselectAnswers()

    let currentQuizData = questions[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    questionCounter++ 
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%
    `
}

function deselectAnswers() {
    answerOptions.forEach(answerOption => answerOption.checked = false)
}

function getSelected() {
    let answer
    answerOptions.forEach(answerOption => {
        if(answerOption.checked) {
            answer = answerOption.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    let answer = getSelected()
    if(answer) {
       if(answer === questions[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < questions.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${questions.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})