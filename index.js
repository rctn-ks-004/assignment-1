const calculator = {
    displayNumber: '0',
    displayOperation: null,
    firstNumber: null,
    secondNumber: null,
    operator: null,
    result: 0
}

function inputDigit(digit) {
    if (digit === '+' || digit === '-' || digit === '*' || digit === '/' || digit === '=') {
        return;
    } else if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function updateDisplayOperation() {
    if (calculator.operator !== null) {
        if (calculator.firstNumber !== null) {
            calculator.displayOperation = `${calculator.firstNumber} ${calculator.operator}`;
        } else if (calculator.firstNumber !== null && calculator.secondNumber !== null) {
            calculator.displayOperation = `${calculator.result} ${calculator.operator}`;
        }
        document.querySelector('.operation').innerText = calculator.displayOperation;
    } else {
        document.querySelector('.operation').innerText = calculator.displayOperation;
    }
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.displayOperation = null;
    calculator.firstNumber = null;
    calculator.secondNumber = null;
    calculator.operator = null;
    calculator.result = 0
}

function performCalculation() {
    if (calculator.operator === '+') {
        calculator.result = parseFloat(calculator.firstNumber) + parseFloat(calculator.secondNumber);
    } else if (calculator.operator === '-') {
        calculator.result = parseFloat(calculator.firstNumber) - parseFloat(calculator.secondNumber);
    } else if (calculator.operator === '*') {
        calculator.result = parseFloat(calculator.firstNumber) * parseFloat(calculator.secondNumber);
    } else if (calculator.operator === '/') {
        calculator.result = parseFloat(calculator.firstNumber) / parseFloat(calculator.secondNumber);
    }
    calculator.firstNumber = calculator.result;
}

const buttons = document.querySelectorAll('.button');

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('all-clear')) {
            clearCalculator();
            updateDisplay();
            updateDisplayOperation();
            return;
        }

        if (target.classList.contains('clear-entry')) {
            calculator.displayNumber = '0';
            updateDisplay();
            return;
        }

        if (target.classList.contains('operator')) {
            if (calculator.displayNumber !== '0') {
                if (calculator.firstNumber === null) {
                    calculator.firstNumber = calculator.displayNumber;
                    calculator.operator = target.innerText;
                    updateDisplayOperation();
                } else if (calculator.secondNumber === null) {
                    calculator.secondNumber = calculator.displayNumber;
                    performCalculation();
                    calculator.operator = target.innerText;
                    updateDisplayOperation();
                } else {
                    if (calculator.displayNumber === '0') {
                        calculator.operator = target.innerText;
                        updateDisplayOperation();
                    } else {
                        calculator.secondNumber = calculator.displayNumber;
                        performCalculation();
                        calculator.operator = target.innerText;
                        updateDisplayOperation();
                    }
                }
            } else {
                calculator.operator = target.innerText;
                updateDisplayOperation();
            }

            calculator.displayNumber = '0';
            return;
        }

        if (target.classList.contains('equal')) {
            if (calculator.firstNumber !== null && calculator.operator !== null) {
                if (calculator.displayNumber !== '0') {
                    calculator.secondNumber = calculator.displayNumber;
                    performCalculation();
                    calculator.displayOperation += ` ${calculator.secondNumber} = ${calculator.result}`;
                    document.querySelector('.operation').innerText = calculator.displayOperation;
                    document.querySelector('#displayNumber').innerText = `${calculator.result}`;
                    clearCalculator();
                }        
            }
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}