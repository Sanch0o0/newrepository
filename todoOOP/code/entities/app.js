class App {
  constructor(todoForm, todoList) {
    this.todoForm = todoForm;
    this.todoList = todoList;
  }

  run() {
    this.todoForm.initialize();
    this.todoForm.onSubmit = this.todoList.add.bind(this.todoList);
    console.log('App runs');
  }
}
