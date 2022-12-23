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

    async addTodo(title) {
        try {
            const todo = await this.model.addTodo({
                id: Date.now(),
                title,
                completed: false,
            });

            this.view.addTodo(todo);
        } catch (error) {
            console.log('ERROR', error);
            this.view.showError(error.message);
        }
    }

    async toggleTodo({ id, completed }) {
        try {
            const updatedTodo = await this.model.updateItem(id, { completed });
            console.log('UPD', updatedTodo);

            this.view.toggleTodo(updatedTodo);
        } catch (error) {
            console.log('ERROR', error);
            this.view.showError(error.message);
        }
    }

    async updateTodo({ id, title }) {
        try {
            console.log('FIRST', id, title);
            const updatedTodo = await this.model.updateItem(id, { title });

            this.view.updateTodo(updatedTodo);
        } catch (error) {
            console.log('ERROR', error);
            this.view.showError(error.message);
        }
    }

    async deleteTodo({ id }) {
        try {
            await this.model.deleteTodo(id);

            this.view.deleteTodo(id);
        } catch (error) {
            console.log('ERROR', error);
            this.view.showError(error.message);
        }
    }
}