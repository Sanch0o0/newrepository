class TodoItem {
  constructor(todoText, onDelete = () => {
    console.log('Deleting');
  }) {
    this.todoText = todoText;
    this.isEditing = false;
    this.onDelete = onDelete;

    this.handleToggle = this.handleToggle.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.initialize();
  }

  initialize() {
    this.checkbox = DomHelper.createCheckbox([{ event: 'change', handler: this.handleToggle }]);
    this.title = DomHelper.createTitle(this.todoText);
    this.editInput = DomHelper.createEditInput(this.todoText);
    this.editButton = DomHelper.createEditButton([{ event: 'click', handler: this.handleEdit }]);
    this.deleteButton = DomHelper.createDeleteButton([{ event: 'click', handler: this.handleDelete }]);

    this.element = DomHelper.createListItem([this.checkbox, this.title, this.editInput, this.editButton, this.deleteButton]);
  }

  destroy() {
    this.checkbox.removeEventListener('change', this.handleToggle);
    this.editInput.removeEventListener('click', this.handleEdit);
    this.editButton.removeEventListener('click', this.handleDelete);
  }

  handleToggle() {
    this.toggle();
  }

  handleEdit() {
    this.edit();
  }

  handleDelete() {
    this.onDelete(this);
  }

  toggle() {
    this.element.classList.toggle('completed');
  }

  edit() {
    if (this.isEditing) {
      this.isEditing = false;
      this.title.textContent = this.editInput.value;
      this.editButton.textContent = 'Edit';
      this.element.classList.remove('editing');
    } else {
      this.isEditing = true;
      this.editInput.value = this.title.textContent;
      this.editButton.textContent = 'Save';
      this.element.classList.add('editing');
    }
  }
}
