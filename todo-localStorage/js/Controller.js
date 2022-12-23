class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.addTodo.bind(this));
    view.on('toggle', this.toggleTodo.bind(this));
    view.on('edit', this.updateTodo.bind(this));
    view.on('delete', this.deleteTodo.bind(this));
  }

  init() {
    this.view.show(this.model.todos);
  }

  addTodo(title) {
    const todo = this.model.addTodo({
      id: Date.now(),
      title,
      completed: false,
    });

    this.view.addTodo(todo);
  }

  toggleTodo({ id, completed }) {
    const updatedTodo = this.model.updateItem(id, { completed });

    this.view.toggleTodo(updatedTodo);
  }

  updateTodo({ id, title }) {
    const updatedTodo = this.model.updateItem(id, { title });

    this.view.updateTodo(updatedTodo);
  }

  deleteTodo({ id }) {
    this.model.deleteTodo(id);

    this.view.deleteTodo(id);
  }
}
