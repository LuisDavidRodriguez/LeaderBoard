import './styles/main.scss';
import ListManager from './modules/listManager.js';
import submit from './modules/form.js';
import { getScores, setScores } from './modules/leaderApi.js';

const submitButton = document.querySelector('#submitButton');
const refreshButton = document.querySelector('#refreshButton');
const listContainer = document.querySelector('#list');
const listManager = new ListManager(listContainer);

getScores(listManager);

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  submit(setScores);
});

refreshButton.addEventListener('click', () => {
  listManager.clearContainer();
  getScores(listManager);
});
