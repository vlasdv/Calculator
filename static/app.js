let operands = [];
let currentNumber = '';
let operator = '';
let commaPressed = false;

const buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');

buttons.forEach((button) => {
  button.addEventListener('click', e => {
    // console.log(e);
    let pressedButton = e.target.textContent;
    if (e.target.id === 'del') {
      console.log('delete');
    } else if (e.target.id === 'ac') {
      console.log('clear');
      reset();
    } else if (e.target.classList.contains('numbers')) {
      console.log('number');
      if (display.textContent === '0') {
        display.textContent = '';
      }
      display.textContent = display.textContent + pressedButton;
      currentNumber = currentNumber + pressedButton;
    } else if (e.target.id === ',') {
      if (!commaPressed) {
        display.textContent = display.textContent + pressedButton;
        currentNumber = currentNumber + '.';
      }
      commaPressed = true;
    } else {
      resetComma();
      operands.push(+currentNumber);
      currentNumber = '';
      console.log(operands);
      if (e.target.classList.contains('operations')) {
        console.log('operation');
        let pressedOperator = e.target.id;      
        if (operator !== '') {
          console.log(operator);
          let x = operands[0];
          let y = operands.length > 1 ? operands[1] : operands[0];
          operands = [];
          switch (operator) {
            case 'add':
              operands[0] = performOperation(x, y, add);
              break;
            case 'subtract':
              operands[0] = performOperation(x, y, subtract);
              break;
            case 'multiply':
              operands[0] = performOperation(x, y, multiply);
              break;
            case 'divide':
              operands[0] = performOperation(x, y, divide);
              break;
          }
          display.textContent = operands[0];          
        }
        display.textContent = display.textContent + ' ' + pressedButton + ' ';
        operator = pressedOperator;
      } else if (e.target.id === '=') {
        console.log('=');           
      }  
    }
  });
});

function reset() {
  resetComma();
  operands = [];
  currentNumber = '';
  operator = '';
  display.textContent = '0';
}

function resetComma() {
  commaPressed = false;
}

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