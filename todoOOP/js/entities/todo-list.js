class TodoList {
  constructor(element) {
    this.element = element;

    this.remove = this.remove.bind(this);
  }

  add(todoText) {
    let todoItem = new TodoItem(todoText, this.remove);

    this.element.appendChild(todoItem.element);
  }

  remove(todoItem) {
    this.element.removeChild(todoItem.element);
    todoItem.destroy();
    todoItem = null;
  }
}
