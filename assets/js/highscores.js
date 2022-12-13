/* Code to display highscores
*  From Youtube: James Q Quick, Load and Display High Scores
*  from local storage
*  https://www.youtube.com/watch?v=jfOv18lCMmw
*/
let highScoresList = document.getElementById("highScoresList");
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");