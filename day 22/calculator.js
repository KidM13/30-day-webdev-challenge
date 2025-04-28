// Select the display and all buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Initialize variables for calculation
let currentInput = '';
let previousInput = '';
let operator = null;

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            // Clear the display and reset variables
            currentInput = '';
            previousInput = '';
            operator = null;
            display.value = '';
        } else if (value === '<-') {
            // Remove the last character from the current input
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (value === '=') {
            // Perform the calculation
            if (operator && previousInput !== '' && currentInput !== '') {
                currentInput = calculate(previousInput, currentInput, operator);
                display.value = currentInput;
                previousInput = '';
                operator = null;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Set the operator and store the current input as previous input
            if (currentInput !== '') {
                if (operator && previousInput !== '') {
                    // Perform intermediate calculation
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.value = currentInput;
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            // Append the value to the current input
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Function to perform calculations
function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
            return (a * b).toString();
        case '/':
            return b !== 0 ? (a / b).toString() : 'Error';
        default:
            return '';
    }
}