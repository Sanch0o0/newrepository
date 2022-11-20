const todoForm = document.querySelector('#form');
const addInput = document.querySelector('#form-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', addTodoItem);

function addTodoItem(event) {
  event.preventDefault();

  const title = addInput.value;

  if (title.trim() === '') {
    alert('You need to enter valid toto title');

    return;
  }

  const todoItem = createTodoItem(title);
  todoList.append(todoItem);

  addInput.value = '';
}

function createTodoItem(title) {
  const checkboxEl = createCheckbox([{ event: 'change', handler: toggleTodoItem }]);
  const titleEl = createTitle(title);
  const editInputEl = createEditInput(title);
  const editButton = createEditButton([{ event: 'click', handler: editTodoItem }]);
  const deleteButton = createDeleteButton([{ event: 'click', handler: deleteTodoItem }]);

  const listItem = createListItem([checkboxEl, titleEl, editInputEl, editButton, deleteButton]);

  return listItem;
}

function toggleTodoItem(event) {
  const listItem = event.target.parentElement;

  listItem.classList.toggle('completed');
}

function editTodoItem(event) {
  const listItem = event.target.parentElement;
  const title = listItem.querySelector('.todo-title');
  const editInput = listItem.querySelector('.todo-input');
  const editButton = listItem.querySelector('.todo-item-btn-edit');
  const isEditing = listItem.classList.contains('editing');

  if (isEditing) {
    title.textContent = editInput.value;
    editButton.textContent = 'Edit';
  } else {
    editInput.value = title.textContent;
    editButton.textContent = 'Save';
  }

  listItem.classList.toggle('editing');
}

function deleteTodoItem(event) {
  const listItem = event.target.parentElement;

  listItem.remove();
}
