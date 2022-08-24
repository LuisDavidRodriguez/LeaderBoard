const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const GAMES_URL = `${BASE_URL}games/`;
const SCORES_URL = (id) => `${GAMES_URL}${id}/scores/`;
const headers = { 'Content-type': 'application/json; charset=UTF-8' };
const GAME_ID = 't0bQKaYMl777YYTlmXPl';

const createNewGame = async () => {
  const bodyCreate = JSON.stringify({ name: 'luisda' });
  const result = await fetch(GAMES_URL, { method: 'POST', bodyCreate, headers });
  console.log(result);
  result.json().then((data) => {
    console.log(data);
  });
};

const getScores = async (listManager) => {
  const result = await fetch(SCORES_URL(GAME_ID), { method: 'GET' });

  result.json().then((data) => {
    listManager.refresh(data.result);
  });
};

const setScores = async (user, score) => {
  const body = JSON.stringify({ user, score });
  const result = await fetch(SCORES_URL(GAME_ID), { method: 'POST', body, headers });

  result.json().then((data) => {
    console.log(data);
  });
};

export { createNewGame, getScores, setScores };
