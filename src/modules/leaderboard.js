const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yibBwcGvcxDFLUJLyAB5/scores/';

const loadScores = () => {
  const getData = async (link) => {
    const request = new Request(link);
    const response = await fetch(request);
    const data = await response.json();
    const { result } = data;
    const scoresList = document.querySelector('.scoresList');
    let string = '';
    result.forEach((element) => {
      string += `<li class="indivScore">${element.user}:${element.score}</li>`;
    });
    scoresList.innerHTML = string;
  };
  getData(url);
};

const addNewScore = (user, score) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: `${user}`,
      score: `${score}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export { addNewScore, loadScores };