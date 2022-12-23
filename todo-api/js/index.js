const runApp = async () => {
  const todos = await getTodos();
  const model = new Model(todos);
  const view = new View(new DomHelper());
  const controller = new Controller(model, view);
  controller.init();
};

runApp();
