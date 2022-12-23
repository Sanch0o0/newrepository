const todoForm = new TodoForm(document.querySelector('#form'));
const todoList = new TodoList(document.querySelector('#todo-list'));
const app = new App(todoForm, todoList);

app.run();
