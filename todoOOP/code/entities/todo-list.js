class TodoList {
  constructor(element) {
    this.element = element;

    this.remove = this.remove.bind(this);
  }

  add(todoText) {
    const todoItem = new TodoItem(todoText, this.remove);

    this.element.append(todoItem.element);
  }

  remove(todoItem) {
    this.element.remove(todoItem.element);
    todoItem.destroy();
    todoItem = null;
  }
}
