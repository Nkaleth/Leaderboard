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
      string += `<li class="indivScore">${element.user}-${element.score}</li>`;
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