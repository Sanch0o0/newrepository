class App {
    constructor(calcInput, calcButtonInput, calcOperation) {
        this.calcInput = calcInput;
        this.calcButtonInput = calcButtonInput;
        this.calcOperation = calcOperation;
        this.value = null;
    }

    run() {
        this.calcInput.show('')
        this.calcButtonInput.initialize();
        this.calcOperation.initialize();
    }

}