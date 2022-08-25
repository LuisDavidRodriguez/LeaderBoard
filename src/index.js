import './styles/main.scss';
import ListManager from './modules/listManager.js';
import submit from './modules/form.js';
import { getScores, setScores } from './modules/leaderApi.js';
import pathBack from './assets/sounds/background.mp3';
import pathRoar from './assets/sounds/lion-roaring-sound.mp3';
import pathBirds from './assets/sounds/submit.mp3';

const submitButton = document.querySelector('#submitButton');
const refreshButton = document.querySelector('#refreshButton');
const listContainer = document.querySelector('#list');
const listManager = new ListManager(listContainer);
const audio = new Audio(pathBack);
const roar = new Audio(pathRoar);
const birds = new Audio(pathBirds);

audio.volume = 0.06;
roar.volume = 0.2;
birds.volume = 0.2;

getScores(listManager);

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  birds.play();
  submit(setScores);
});

refreshButton.addEventListener('click', () => {
  listManager.clearContainer();
  roar.play();
  getScores(listManager);

  setTimeout(() => {
    roar.pause();
    roar.currentTime = 0;
  }, 1800);
});

window.addEventListener('mousemove', () => {
  audio.play();
});
