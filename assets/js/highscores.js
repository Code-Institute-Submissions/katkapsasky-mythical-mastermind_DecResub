/* jshint esversion: 11 */

let username = document.getElementById('username');
let saveScoreButton = document.getElementById('save-score-button');
let finalScore = document.getElementById('finalScore');
let mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
};