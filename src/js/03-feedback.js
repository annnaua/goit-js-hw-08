import throttle from 'lodash.throttle';

const FEEDBACK_FORM = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

function onFormData(e) {
  let formData = localStorage.getItem(FEEDBACK_FORM);

  formData = formData ? JSON.parse(formData) : {};
  formData[e.target.name] = e.target.value;

  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM)));
  localStorage.removeItem(FEEDBACK_FORM);
}

function setInputsLocalStorage() {
  const savedFormData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));

  if (savedFormData) {
    for (const key in savedFormData) {
      form.elements[key].value = savedFormData[key];
    }
  }
}

setInputsLocalStorage();
