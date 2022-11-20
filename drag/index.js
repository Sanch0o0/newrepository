const item = document.querySelector('#item');
const boxes = document.querySelectorAll('.box');

item.addEventListener('dragstart', (event) => {
  console.log('DRAG_START', event.target.id);

  event.dataTransfer.setData('text/plain', event.target.id);

  setTimeout(() => {
    event.target.classList.add('hide');
  }, 0)
});

boxes.forEach(box => {
  box.addEventListener('dragenter', (event) => {
    event.preventDefault();
    console.log('DRAG_ENTER');
    event.target.classList.add('drag-over');
  });

  box.addEventListener('dragover', (event) => {
    event.preventDefault();
    console.log('DRAG_OVER');
    event.target.classList.add('drag-over');
  });

  box.addEventListener('dragleave', (event) => {
    console.log('DRAG_LEAVE');
    event.target.classList.remove('drag-over');
  });

  box.addEventListener('drop', (event) => {
    const id = event.dataTransfer.getData('text/plain');
    const droppable = document.getElementById(id);
    console.log('DROP', droppable);

    event.target.append(droppable);
    droppable.classList.remove('hide');
  });
});
