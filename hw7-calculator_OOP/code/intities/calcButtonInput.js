class CalcButtonInput {
    constructor(element) {
        this.element = element;
        this.inputNumber = null;

        this.initialize();
    }

    initialize() {
        this.element.addEventListener('click', this.showInputButt);
    }

    showInputButt(event) {
        if (isNaN(event.target.getAttribute('id')) && (event.target.getAttribute('id') !== '.')) return;

        this.inputNumber = event.target.getAttribute('id');
        calcInput.show(this.inputNumber)
        return this.inputNumber;
    }
}