class CalcInput {
    constructor(element) {
        this.element = element;
        this.inputNumber = null;
        this.displayBox = document.querySelector('.displayBox')

        this.showInput = this.showInput.bind(this)
    }

    show(number) {
        if (this.inputNumber === null) {
            this.inputNumber = number
        } else {
            if (this.inputNumber.includes('.') && number === '.') return;
            this.inputNumber += number;
        }
        this.element.value = this.inputNumber;

        this.element.addEventListener('input', this.showInput);
    }

    showInput(event) {
        let last = event.target.value.length - 1;
        if (event.target.value.slice(0, last).includes('.') && event.target.value[last] === '.') {
            event.target.value = event.target.value.slice(0, last) + event.target.value[last].replace(/[^\d]/g, '');
        }
        event.target.value = event.target.value.replace(/[^\d.]/g, '');
        this.inputNumber = event.target.value;
        this.element.value = event.target.value;
    }


}