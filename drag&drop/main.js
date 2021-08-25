const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder');

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', dragDrop);
});

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

function dragStart(e) {
  e.target.classList.add('hold', 'active');
  setTimeout(() => e.target.classList.add('hide'), 0);
}
function dragEnd(e) {
  console.log('dragEnd');
  e.target.classList.remove('hide', 'hold', 'active');
}

function dragOver(e) {
  console.log('dragOver');
  e.preventDefault();

}

function dragEnter(e) {
  console.log('dragEnter');
  e.target.classList.add('hovered');

}

function dragLeave(e) {
  console.log('dragLeave');
  e.target.classList.remove('hovered');

}

function dragDrop(e) {
  e.target.append(item);
  e.target.classList.remove('hovered');
  console.log('dragDrop');

}
