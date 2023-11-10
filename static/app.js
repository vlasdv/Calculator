let operands = [];
let operator = '';
let commaPressed = false;
let typingDigits = false;
let resultPressed = false;

const buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');

buttons.forEach((button) => {

  button.addEventListener('click', e => {

    if (e.target.id ==='ac') {
      reset();
    } else if (e.target.id === '.') {
      if (!commaPressed) {
        if (typingDigits) {
          display.textContent = display.textContent + '.';
        } else {
          display.textContent = '0.';
          typingDigits = true;          
        }       
      }
      commaPressed = true;
    } else if (e.target.id === 'del') {
      if (typingDigits) {
        display.textContent = display.textContent.slice(0, -1);
        if (display.textContent === '') {
          display.textContent = 0;
          typingDigits = false;
          resetComma();
        }
      } else {
        display.textContent = '0';        
      }
    } else if (e.target.classList.contains('numbers')) {      
      if (typingDigits) {
        display.textContent = display.textContent + e.target.id;        
      } else {
        display.textContent = e.target.id;
      }
      typingDigits = true;
    } else { 
            
      resetComma();   
      
      if (e.target.classList.contains('operations')) {
        
        if (resultPressed) {
          operator = '';
          resultPressed = 'false';
        }

        if (typingDigits) {
          if (operands.length === 2) {
            // operands[0] = operands[1];
            operands.pop();
          }
          operands.push(+display.textContent);
        }

        if (operator !== '') {          
          let x, y;
          if (operands.length === 2) {            
            x = operands[0];
            y = operands[1];
          } else {
            x = operands[0];
            y = x;
            operands.push(y);
          }

          let result;
          switch (operator) {
            case ('+'): 
              result = performOperation(x, y, add);
              break;
            
            case ('-'): 
              result = performOperation(x, y, subtract);
              break;
            
            case ('*'): 
              result = performOperation(x, y, multiply);
              break;

            case ('/'): 
              result = performOperation(x, y, divide);
              break;
          }          

          console.log(operands[0] + ' ' + operator + ' ' + operands[1] + ' = ' + result);

          operands[0] = result;
          // display.textContent = result;          
          displayResult(result);
        }           

        typingDigits = false;
        operator = e.target.id;
        
      } else if (e.target.id === '=') {
        
        resultPressed = true;

        if (typingDigits) {
          if (operands.length === 2) {
            // operands[0] = operands[1];
            operands.pop();
          }
          operands.push(+display.textContent);
        }

        if (operator !== '') {          
          let x, y;
          if (operands.length === 2) {            
            x = operands[0];
            y = operands[1];
          } else {
            x = operands[0];
            y = x;
            operands.push(y);
          }

          let result;
          switch (operator) {
            case ('+'): 
              result = performOperation(x, y, add);
              break;
            
            case ('-'): 
              result = performOperation(x, y, subtract);
              break;
            
            case ('*'): 
              result = performOperation(x, y, multiply);
              break;

            case ('/'): 
              result = performOperation(x, y, divide);
              break;
          } 

          console.log(operands[0] + ' ' + operator + ' ' + operands[1] + ' = ' + result);

          operands[0] = result;
          displayResult(result);
          // display.textContent = result;  
        }
        typingDigits = false;
      }      
    }        
  });
});

function displayResult(result) {
  display.textContent = result.toString().slice(0, 17);
}

function reset() {
  resetComma();
  operands = [];  
  operator = '';
  display.textContent = '0';
  typingDigits = false;
  resultPressed = false;
}

function resetComma() {
  commaPressed = false;
}

function performOperation(x, y, operation) {
  typingDigits = false;
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