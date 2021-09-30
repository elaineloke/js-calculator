// Select all different numbers and operands

//Add constructor to take all the inputs and functions of calculator
class Calculator {
    constructor(previousOperantTextElement, currentOperantTextElement) {
        this.previousOperantTextElement = previousOperantTextElement
        this.currentOperantTextElement = currentOperantTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation (operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperantTextElement = document.querySelector('[data-previous-operand]')
const currentOperantTextElement = document.querySelector('[data-current-operand]')

// How to store previous and current inputs > use a class