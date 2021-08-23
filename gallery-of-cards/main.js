const cards = document.querySelectorAll('.card');

const clearActiveClasses = () => cards.forEach(card => card.classList.remove('active'));

cards.forEach(card => card.addEventListener('click', function () {
  clearActiveClasses();
  this.classList.add('active');
}));
