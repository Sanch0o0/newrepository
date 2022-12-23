class View extends EventEmitter {
  constructor(domElementBuilder) {
    super();

    this.domElementBuilder = domElementBuilder;

    this.form = document.getElementById('form');
    this.formInput = document.getElementById('form-input');
    this.todoList = document.getElementById('todo-list');

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.form.addEventListener('submit', this.handleAddTodo);
  }
  show(todos) {
    todos.forEach(todo => {
      this.addTodo(todo);
    });
  }

  createTodoItem(todo) {
    const checkbox = this.domElementBuilder.createCheckbox([{ event: 'change', handler: this.handleToggle }]);
    const title = this.domElementBuilder.createTitle(todo.title);
    const editInput = this.domElementBuilder.createEditInput(todo.title);
    const editButton = this.domElementBuilder.createEditButton([{ event: 'click', handler: this.handleEdit }]);
    const deleteButton = this.domElementBuilder.createDeleteButton([{ event: 'click', handler: this.handleDelete }]);

    return this.domElementBuilder.createListItem([{ prop: 'data-id', value: todo.id }], [checkbox, title, editInput, editButton, deleteButton]);
  }

  handleAddTodo(event) {
    event.preventDefault();

    const title = this.formInput.value;

    if (title.trim() === '') {
      alert('You need to enter valid toto title!');

      return;
    }

    this.emit('add', title);
  }

  handleToggle(event) {
    const todoItem = event.target.closest('.todo-item');
    const id = +todoItem.dataset.id;
    const completed = event.target.checked;

    this.emit('toggle', { id, completed });
  }
  handleEdit(event) {
    const todoItem = event.target.closest('.todo-item');
    const title = todoItem.querySelector('.todo-title');
    const editInput = todoItem.querySelector('.todo-input');
    const editButton = todoItem.querySelector('.todo-item-btn-edit');

    const isEditing = todoItem.classList.contains('editing');

    if (isEditing) {
      const id = +todoItem.dataset.id;
      const title = editInput.value;

      this.emit('edit', { id, title });
    } else {
      editInput.value = title.textContent;
      editButton.textContent = 'Save';
      todoItem.classList.add('editing');
    }
  }
  handleDelete(event) {
    const todoItem = event.target.closest('.todo-item');
    const id = +todoItem.dataset.id;

    this.emit('delete', { id });
  }

  addTodo(todo, isBulkAdd = false) {
    if (!isBulkAdd) {
      this.formInput.value = '';
    }

    const todoItem = this.createTodoItem(todo);

    this.todoList.append(todoItem);
  }

  toggleTodo(todo) {
    const todoItem = this.#findListItem(todo.id);
    const checkbox = todoItem.querySelector('.checkbox');

    checkbox.checked = todo.completed;

    if (todo.completed) {
      todoItem.classList.add('completed');
    } else {
      todoItem.classList.remove('completed');
    }
  }

  updateTodo(todo) {
    const todoItem = this.#findListItem(todo.id);
    const title = todoItem.querySelector('.todo-title');
    const editButton = todoItem.querySelector('.todo-item-btn-edit');

    title.textContent = todo.title;
    editButton.textContent = 'Change';

    todoItem.classList.remove('editing');
  }

  deleteTodo(id) {
    const todoItem = this.#findListItem(id);

    this.todoList.removeChild(todoItem);
  }

  #findListItem(id) {
    return this.todoList.querySelector(`[data-id="${id}"]`);
  }
}
