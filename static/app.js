const operands = [];
let operator = '';

function performOperation(x, y, operation) {
  return operation(x, y);
}

function add(x, y) {
return x + y;
}

function subtract(x, y) {
return x - y;
}

function multiply(x, y) {
return x * y;  
}

function divide(x, y) {
return x / y;
}