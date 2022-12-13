/* jshint esversion: 11 */

/* Code to save score and username
*  and set max 5 high scores
*  From Youtube: James Q Quick, Save High Scores
*  in local storage
*  https://www.youtube.com/watch?v=DFhmNLKwwGw
*/

let username = document.getElementById('username');
let saveScoreButton = document.getElementById('save-score-button');
let finalScore = document.getElementById('finalScore');
let mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
let MAX_HIGH_SCORES = 5;

username.addEventListener('keyup', () => {
    saveScoreButton.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    let score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};