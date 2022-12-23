class Model {
  constructor(todos = []) {
    this.todos = todos;
  }

  async addTodo(todo) {
    const todoId = await createTodo(todo);

    await this.getTodos();

    const newTodo = this.todos.find(todo => todo.id === todoId);

    return newTodo;
  }

  async updateItem(id, dataToUpdate) {
    await updateTodo(id, dataToUpdate);

    await this.getTodos();
    console.log('UPD', id, this.todos);
    const updatedTodo = this.todos.find(todo => todo.id === id);

    return updatedTodo;
  }

  async deleteTodo(id) {
    await deleteTodo(id);

    await this.getTodos();
  }

  async getTodos() {
    const todos = await getTodos();

    this.todos = todos;
  }
}
