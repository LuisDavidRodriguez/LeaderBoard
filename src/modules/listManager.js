export default class ListManager {
  #parentContainer;

  #arrScores = [];

  constructor(container) {
    this.#parentContainer = container;
  }

  addPlayer(name, score) {
    const object = { name, score };
    this.#arrScores.push(object);
    const element = this.#createDOMelement(object);
    this.#parentContainer.append(element);
  }

  // eslint-disable-next-line class-methods-use-this
  #createDOMelement(object) {
    const li = document.createElement('li');
    const pName = document.createElement('p');
    const pScore = document.createElement('p');

    pName.textContent = object.name;
    pScore.textContent = object.score;
    li.append(pName, pScore);
    return li;
  }
}