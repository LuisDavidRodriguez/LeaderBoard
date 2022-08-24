export default class ListManager {
  #parentContainer;

  constructor(container) {
    this.#parentContainer = container;
  }

  refresh(data) {
    this.clearContainer();
    data.forEach((player) => {
      this.addPlayer(player);
    });
  }

  addPlayer({ user, score }) {
    const object = { user, score };
    const element = this.#createDOMelement(object);
    this.#parentContainer.append(element);
  }

  clearContainer() {
    this.#parentContainer.textContent = '';
  }

  // eslint-disable-next-line class-methods-use-this
  #createDOMelement(object) {
    const li = document.createElement('li');
    const pUser = document.createElement('p');
    const pScore = document.createElement('p');

    pUser.textContent = object.user;
    pScore.textContent = object.score;
    li.append(pUser, pScore);
    return li;
  }
}