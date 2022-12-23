class OperationHelper {
    static calcOperation(event) {
        if (calcOperation.doOperation === true) {
            calcOperation.result = eval(calcOperation.expression + calcInput.inputNumber)
            calcOperation.expression = calcOperation.result + event.target.getAttribute('id');
            calcInput.displayBox.textContent = calcOperation.expression;
        } else {
            calcOperation.expression = calcInput.inputNumber + event.target.getAttribute('id');
            calcInput.displayBox.textContent = calcOperation.expression;
            calcOperation.doOperation = true;
        }
        calcInput.inputNumber = '';
        calcInput.element.value = '';
    }

    static renderResult() {
        calcOperation.doOperation = false;
        calcOperation.result = eval(calcOperation.expression + calcInput.inputNumber);

        this.showResult(calcOperation.result);
    }

    static deleteAll() {
        this.showResult('');
        calcOperation.result = '';
        calcOperation.expression = '';
        calcOperation.doOperation = false;
    }

    static changeSign() {
        if (calcInput.element.value === null) return;

        this.showResult(-calcInput.inputNumber);
    }

    static getPercent() {
        if (calcInput.element.value === null) return;

        this.showResult(0.01 * calcInput.inputNumber);
    }

    static showResult(result) {
        if (!Number.isInteger(result) && !(result === '')) result = result.toFixed(3);

        calcInput.displayBox.textContent = result;
        calcInput.inputNumber = result;
        calcInput.element.value = result;
    }
}