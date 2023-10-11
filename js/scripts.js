const page = document.querySelector('.page');
const modalForm = document.querySelector('.modal__form');
const submitButton = document.querySelector('.vote-form__submit');

var voteButtons = document.querySelectorAll('.button__vote');
var results = document.querySelectorAll('.result');

for (let i = 0; i < voteButtons.length; i++) {
  voteButtons[i].addEventListener('click', function() {
      page.classList.add('lock');
      modalForm.classList.add('active');
      console.log(voteButtons[i].id); //Выводим в консоль id выбранного голоса
  });
}

// При клике ВНЕ модалки - закрываем ее
modalForm.addEventListener('click', (e) => {
  if (e.target === modalForm) {
    page.classList.remove('lock');
    modalForm.classList.remove('active');
  }
});

submitButton.addEventListener('click', showResult);

function showResult() {
  for (let i = 0; i < voteButtons.length; i++) {
    voteButtons[i].classList.add('hidden');
  }
  for (let i = 0; i < results.length; i++) {
    results[i].classList.remove('hidden');
  }
}
