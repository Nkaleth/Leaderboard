const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3wDWtTtlzipeiwf7BDH1/scores/';

const loadScores = () => {
  const getData = async (link) => {
    const request = new Request(link);
    const response = await fetch(request);
    const data = await response.json();
    const { result } = data;
    const scoresList = document.querySelector('.scoresList');
    let string = '';
    result.forEach((element) => {
      string += `<li class="indivScore"><img src="https://playvalorant.com/assets/images/leaderboards/radiant-badge.png" alt="badge"><p>${element.score}</p><p>${element.user}</p></li>`;
    });
    scoresList.innerHTML = string;
  };
  getData(url);
};

const addNewScore = (user, score) => {
  const sendData = async (link) => {
    const request = new Request(link);
    const response = await fetch(request, {
      method: 'POST',
      body: JSON.stringify({
        user: `${user}`,
        score: `${score}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    await response.json();
  };
  sendData(url);
};

export { addNewScore, loadScores };