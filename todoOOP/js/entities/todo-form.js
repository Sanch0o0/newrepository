class TodoForm {
  constructor(element) {
    this.element = element;
    this.formInput = null;
    this.onSubmit = () => {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initialize() {
    this.formInput = this.element.querySelector('#form-input');
    this.element.addEventListener('submit', this.handleSubmit);
  }

  destroy() {
    this.element.removeEventListener('submit', this.handleSubmit);
  }

  handleSubmit(event) {
    event.preventDefault();

    const title = this.formInput.value;

    if (title.trim() === '') {
      alert('You need to enter valid toto title!');

      return;
    }

    this.onSubmit(title);
    this.formInput.value = '';
  }
}
