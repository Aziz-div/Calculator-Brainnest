// Get references to DOM elements
const display = document.querySelector('.calculator-display');
const operators = document.querySelectorAll('.operator');
const operands = document.querySelectorAll('.operand');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

// Set initial state of calculator
let oper = null;
let currentOperator = null;
let result = null;

// Add event listeners to buttons
operators.forEach(operator => {
  operator.addEventListener('click', handleOperatorClick);
});

operands.forEach(operand => {
  operand.addEventListener('click', handleOperandClick);
});

clearButton.addEventListener('click', handleClearClick);

equalsButton.addEventListener('click', handleEqualsClick);

// Handle operator button clicks
function handleOperatorClick(event) {
  const operator = event.target.value;

  // If there is already an operation in progress, compute the result
  if (oper !== null && currentOperator !== null) {
    operat();
  }

  // Update the state with the new operator
  currentOperator = operator;
  oper = parseFloat(display.textContent);
  display.textContent = '0';
}

// Handle operand button clicks
function handleOperandClick(event) {
  const value = event.target.value;

  // If the display shows 0, replace it with the new operand
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

// Handle clear button click
function handleClearClick() {
  oper = null;
  currentOperator = null;
  result = null;
  display.textContent = '0';
}

// Handle equals button click
function handleEqualsClick() {
  // If there is an operation in progress, compute the result
  if (oper !== null && currentOperator !== null) {
    operat();
    oper = null;
    currentOperator = null;
  }
}

// Compute the result of the current operation
function operat() {
  const operand = parseFloat(display.textContent);

  switch (currentOperator) {
    case '+':
      result = add(oper, operand);
      break;
    case '-':
      result = subtract(oper, operand);
      break;
    case '*':
      result = multiply(oper, operand);
      break;
    case '/':
      result = divide(oper, operand);
      break;
    default:
      console.error('Invalid operator');
      return;
  }

  // Update the display with the result
  display.textContent = result;
}

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    console.error('Division by zero');
    return NaN;
  } else {
    return a / b;
  }
}
