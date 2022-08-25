const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const GAMES_URL = `${BASE_URL}games/`;
const SCORES_URL = (id) => `${GAMES_URL}${id}/scores/`;
const headers = { 'Content-type': 'application/json; charset=UTF-8' };
const GAME_ID = 't0bQKaYMl777YYTlmXPl';

const createNewGame = async () => {
  const bodyCreate = JSON.stringify({ name: 'luisda' });
  const result = await fetch(GAMES_URL, { method: 'POST', bodyCreate, headers });
  const data = await result.json();
  console.log(result);
  console.log(data);
};

const getScores = async (listManager) => {
  try {
    const result = await fetch(SCORES_URL(GAME_ID), { method: 'GET' });
    const data = await result.json();
    console.log(result);
    console.log(data.result);
    console.log(result.status); // 201 ok etc

    listManager.refresh(data.result);
  } catch (error) {
    console.log(error);
  }
};

const setScores = async (user, score) => {
  const body = JSON.stringify({ user, score });
  const result = await fetch(SCORES_URL(GAME_ID), { method: 'POST', body, headers });
  const data = await result.json();

  console.log(result.status); // 201 ok etc
  console.log(result);
  console.log(data);

  if (result.status === 201) {
    console.log('success');
  }
};

export { createNewGame, getScores, setScores };
