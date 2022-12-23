class CalcOperation {
    constructor(element) {
        this.element = element;
        this.expression = '';
        this.result = '';
        this.doOperation = false;

        this.initialize();
    }

    initialize() {
        this.element.addEventListener('click', this.showOperButt);
    }

    showOperButt(event) {
        if (!calcInput.element.value) return;

        if (this.expression === undefined) this.expression = '';

        switch (event.target.classList[1]) {
            case 'delete-all':
                OperationHelper.deleteAll();
                break;
            case 'first-oper':
                OperationHelper.calcOperation(event);
                break;
            case 'result-oper':
                OperationHelper.renderResult();
                break;
            case 'change-sign_button':
                OperationHelper.changeSign();
                break;
            case 'percent_button':
                OperationHelper.getPercent();
                break;
        }
    }

}