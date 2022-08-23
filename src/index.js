import './styles/main.scss';
import ListManager from './modules/listManager.js';
import listenerSubmit from './modules/form.js';

const listContainer = document.querySelector('#list');
const listManager = new ListManager(listContainer);

listManager.addPlayer('Erik', 900);
listManager.addPlayer('luisda', 1500);
listManager.addPlayer('federico', 2000);

listenerSubmit(listManager);