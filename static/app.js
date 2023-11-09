const operands = [];
let operator = '';

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', e => {
    // console.log(e);
    if (e.target.classList.contains('numbers')) {
      console.log('number');
    } else if (e.target.classList.contains('operations')) {
      console.log('operation');
    } else if (e.target.id === '=') {
      console.log('=');
    } else if (e.target.id === ',') {
      console.log('delete');
    } else if (e.target.id === 'del') {
      console.log('delete');
    } else if (e.target.id === 'ac') {
      console.log('clear');
    }
  });
});

// addEventListener()

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