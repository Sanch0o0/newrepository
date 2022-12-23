const calcButtonInput = new CalcButtonInput(document.querySelector('.buttons_box'));
const calcInput = new CalcInput(document.querySelector('.calc-input'));
const calcOperation = new CalcOperation(document.querySelector('.buttons_box'));

const app = new App(calcInput, calcButtonInput, calcOperation);

app.run();