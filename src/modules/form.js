const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

const validInputs = () => {
  // Check the minimal validations in the html
  if (!nameInput.validity.valid || !scoreInput.validity.valid) return false;

  // Check if any input is empty
  if (nameInput.value.trim() === '' || scoreInput.value.trim() === '') return false;

  const score = scoreInput.value.trim();

  if (/\D/g.test(score)) {
    return false;
  }

  return true;
};

const submit = (callBack) => {
  if (!validInputs()) return;

  const nameValue = nameInput.value.trim();
  const scoreValue = scoreInput.value.trim();
  nameInput.value = '';
  scoreInput.value = '';
  callBack(nameValue, scoreValue);
};

export default submit;