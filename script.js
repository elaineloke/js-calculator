// Select all different numbers and operands

//Add constructor to take all the inputs and functions of calculator
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperadtTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
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
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation (operation) {
        if (this.currentOperand === ') return
        if )this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation 
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute() {
        let computation //this will be result of compute function
        const prev = parseFloat(this.previousOperand) //converting string to int
        const currenet = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) returnswitch
        switch //a bunch of if statement chained together
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// How to store previous and current inputs > use a class

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay
})
