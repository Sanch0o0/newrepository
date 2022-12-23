class Model extends EventEmitter {
  constructor(todos = []) {
    super();

    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(todo);

    this.emit('change', this.todos);

    return todo;
  }

  updateItem(id, dataToUpdate) {
    let updatedTodo;

    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        updatedTodo = {
          ...todo,
          ...dataToUpdate,
        };

        return updatedTodo;
      }

      return todo;
    });

    this.emit('change', this.todos);

    return updatedTodo;
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);

    this.emit('change', this.todos);

    return id;
  }
}
