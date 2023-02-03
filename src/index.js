import './style.css';
import { loadScores, addNewScore } from './modules/leaderboard.js';

const newScoreData = document.querySelector('.addScoreForm');
const { name, score } = newScoreData.elements;

loadScores();

newScoreData.addEventListener('submit', (e) => {
  e.preventDefault();
  const newUser = name.value;
  const newScore = score.value;
  addNewScore(newUser, newScore);
  newScoreData.reset();
});
