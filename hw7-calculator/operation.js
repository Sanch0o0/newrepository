function sum(a, b) {
    return a + b;
};


const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const getPercent = (a) => {
    return a * 0.01;
};

const showResult = (res) => {
    calcInput.value = res;
    displayCalculateElement.textContent = res;
}

function showDisplayBox(operation) {
    switch (operation) {
        case 'sum':
            displayCalculateElement.textContent = `${firstOperand} +`;
            break;
        case 'subtract':
            displayCalculateElement.textContent = `${firstOperand} -`;
            break;
        case 'multiply':
            displayCalculateElement.textContent = `${firstOperand} *`;
            break;
        case 'divide':
            displayCalculateElement.textContent = `${firstOperand} /`;
            break;
    }
}