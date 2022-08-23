const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const submitButton = document.querySelector('#submitButton');

function validInputs() {
  // Check the minimal validations in the html
  if (!nameInput.validity.valid || !scoreInput.validity.valid) return false;

  // Check if any input is empty
  if (nameInput.value.trim() === '' || scoreInput.value.trim() === '') return false;

  const score = scoreInput.value.trim();

  if (/\D/g.test(score)) {
    return false;
  }

  return true;
}

const submitCallBack = (listManager) => {
  if (!validInputs()) return;

  const nameValue = nameInput.value.trim();
  const scoreValue = scoreInput.value.trim();
  nameInput.value = '';
  scoreInput.value = '';

  listManager.addPlayer(nameValue, scoreValue);
};

export default function listenerSubmit(listManager) {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    submitCallBack(listManager);
  });
}
