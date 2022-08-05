import throttle from 'lodash.throttle';

const FEEDBACK_FORM = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(e) {
  // 1. Записываем в объект ключи и их значение
  formData[e.target.name] = e.target.value;
  // console.log(formData);

  // 2. Сохраняем в localStorage
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();

  // 1. Очищаем форму после отправки данных
  e.currentTarget.reset();
  // 2. Выводим значения в консоль после отправки формы
  console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM)));
  // 3. Очищаем localStorage после отправки формы
  localStorage.removeItem(FEEDBACK_FORM);
}

const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

function setInputsLocalStorage() {
  const savedFormData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));

  if (savedFormData) {
    email.value = savedFormData.email;
    message.value = savedFormData.message;
  }
}

setInputsLocalStorage();
