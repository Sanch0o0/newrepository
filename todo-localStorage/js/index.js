const todos = StorageHelper.getItem('todos');

const model = new Model(todos || []);
model.on('change', (todos) => StorageHelper.setItem('todos', todos));

const view = new View(new DomHelper());
const controller = new Controller(model, view);

controller.init();
