let inputForm = document.querySelector('.input_form');
let pressButton = document.querySelector('.buttons_box');
let calcInput = document.querySelector('.calc-input');
let displayCalculateElement = document.querySelector('.displayBox');

inputForm.addEventListener('input', replaceInput)
pressButton.addEventListener('click', calculateButton)

let inputValue = 0;
let firstOperand = '';
let secondOperand = '';

function replaceInput(event) {
    event.preventDefault();

    inputValue = event.target.value;

    if (inputValue.includes('..') && event.data === '.') {
        event.target.value = event.target.value.replace(/[^\d]/g, '');
        return;
    }
    event.target.value = event.target.value.replace(/[^\d.]/g, '');

    highlightButtons(event.data);
}

function calculateButton(event) {
    let idButton = event.target.getAttribute('id');
    let classBut = [...event.target.classList][0];
    switch (classBut) {
        case 'number':
            addNumber(idButton);
            break;
        case 'operation':
            doOperation(idButton);
            break;
        case 'delete':
            deleteAll();
            break;
    }

}

function addNumber(number) {
    if (calcInput.value.length >= 10) return;
    if (calcInput.value.includes('.') && number === '.') return;
    (calcInput.value.length) ? inputValue += number: inputValue = number;
    calcInput.value = inputValue;
}

let result;
let firstOperation;

function doOperation(operation) {

    (firstOperand === '') ? firstOperand = inputValue: secondOperand = inputValue;
    showDisplayBox(operation);

    inputValue = '';
    calcInput.value = '';

    if (operation === 'changeSign') return changeSign();

    if (firstOperation === undefined) firstOperation = String(operation);

    if (operation === 'getPercent') {
        firstOperand = getPercent(firstOperand)
        showResult(firstOperand);
        firstOperation = undefined;
        return;
    }

    if (firstOperand !== '' && secondOperand !== '') {
        firstOperation = eval(firstOperation);
        firstOperand = firstOperation(+firstOperand, +secondOperand);
        firstOperation = operation;
    }

    if (operation === 'showResult') {
        if (!Number.isInteger(firstOperand)) firstOperand = firstOperand.toFixed(3);
        showResult(firstOperand);
        firstOperation = undefined;
        return;
    }

}

function changeSign() {
    calcInput.value = -firstOperand;
    firstOperand = -firstOperand;
    firstOperation = undefined;
}

function deleteAll() {
    firstOperand = '';
    secondOperand = '';
    firstOperation = undefined;
    calcInput.value = '';
    displayCalculateElement.textContent = '';
}

function highlightButtons(button) {

    let arr = [...pressButton.children];

    arr.forEach(element => {
        if (element.getAttribute('id') === button) {
            element.classList.add('inner')
            setInterval(() => {
                element.classList.remove('inner')
            }, 120)
        }
    });

}