const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "0";
let previousInput = "";
let operator = null;
let shouldResetDisplay = false;

function updateDisplay() {
    display.textContent = currentInput;
}

function calculate() {
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(previous) || isNaN(current) || !operator) {
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = previous + current;
            break;

        case "−":
            result = previous - current;
            break;

        case "×":
            result = previous * current;
            break;

        case "÷":
            if (current === 0) {
                currentInput = "Error";
                operator = null;
                previousInput = "";
                return;
            }

            result = previous / current;
            break;
    }

    currentInput = String(
        Number.isInteger(result)
            ? result
            : parseFloat(result.toFixed(10))
    );

    operator = null;
    previousInput = "";
}

function handleNumber(number) {

    if (currentInput === "Error" || shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
        updateDisplay();
        return;
    }

    if (currentInput === "0") {
        currentInput = number;
    } else {
        currentInput += number;
    }

    updateDisplay();
}

function handleDecimal() {

    if (currentInput === "Error" || shouldResetDisplay) {
        currentInput = "0.";
        shouldResetDisplay = false;
        updateDisplay();
        return;
    }

    if (!currentInput.includes(".")) {
        currentInput += ".";
    }

    updateDisplay();
}

function handleOperator(selectedOperator) {

    if (currentInput === "Error") {
        return;
    }

    if (operator && !shouldResetDisplay) {
        calculate();
    }

    previousInput = currentInput;
    operator = selectedOperator;
    shouldResetDisplay = true;
}

function clearCalculator() {
    currentInput = "0";
    previousInput = "";
    operator = null;
    shouldResetDisplay = false;

    updateDisplay();
}

function backspace() {

    if (currentInput === "Error" || shouldResetDisplay) {
        return;
    }

    if (currentInput.length === 1) {
        currentInput = "0";
    } else {
        currentInput = currentInput.slice(0, -1);
    }

    updateDisplay();
}

function percentage() {

    if (currentInput === "Error") {
        return;
    }

    currentInput = String(parseFloat(currentInput) / 100);

    updateDisplay();
}


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if (!isNaN(value)) {
            handleNumber(value);
        }

        else if (value === ".") {
            handleDecimal();
        }

        else if (value === "AC") {
            clearCalculator();
        }

        else if (value === "⌫") {
            backspace();
        }

        else if (value === "%") {
            percentage();
        }

        else if (["+", "−", "×", "÷"].includes(value)) {
            handleOperator(value);
        }

        else if (value === "=") {
            calculate();
            shouldResetDisplay = true;
            updateDisplay();
        }

    });

});


updateDisplay();