const container = document.querySelector('#container');

for(let row = 1; row <= 5; row++) {
  const rowContainer = document.createElement('div');
  rowContainer.id = 'row';
  container.append(rowContainer);
  for(let column = 1; column <= 4; column++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.id = 'button'+ 'r' + row + 'c' + column;
    rowContainer.append(button);
  };
};

function add (a, b) {
  return a + b;
};

function subtract (a, b) {
  return a - b;
};

function multiply (a, b) {
  return a * b;
};

function divide (a, b) {
  return a / b;
};

function exponent (a, b) {
  return a ** b;
};

function operate(a, b, operation) {
  if (operation == 'add') {
    return add(a, b);
  }
  else if (operation == 'subtract') {
    return subtract(a, b);
  }
  else if (operation == 'multiply') {
    return multiply(a, b);
  }
  else if (operation == 'divide') {
    return divide(a, b);
  }
  else if (operation == 'exponent') {
    return exponent(a, b);
  }
};

const buttonAC = document.querySelector("#buttonr1c1");
buttonAC.textContent = 'AC';

const buttonSign = document.querySelector("#buttonr1c2");
buttonSign.textContent = '+/-';

const buttonExponent = document.querySelector("#buttonr1c3");
buttonExponent.textContent = '**';

const buttonMultiply = document.querySelector("#buttonr1c4");
buttonMultiply.textContent = '*';

const buttonNine = document.querySelector("#buttonr2c1");
buttonNine.textContent = '9';

const buttonEight = document.querySelector("#buttonr2c2");
buttonEight.textContent = '8';

const buttonSeven = document.querySelector("#buttonr2c3");
buttonSeven.textContent = '7';

const buttonDivide = document.querySelector("#buttonr2c4");
buttonDivide.textContent = '/';

const buttonSix = document.querySelector("#buttonr3c1");
buttonSix.textContent = '6';

const buttonFive = document.querySelector("#buttonr3c2");
buttonFive.textContent = '5';

const buttonFour = document.querySelector("#buttonr3c3");
buttonFour.textContent = '4';

const buttonAdd= document.querySelector("#buttonr3c4");
buttonAdd.textContent = '+';

const buttonThree = document.querySelector("#buttonr4c1");
buttonThree.textContent = '3';

const buttonTwo = document.querySelector("#buttonr4c2");
buttonTwo.textContent = '2';

const buttonOne = document.querySelector("#buttonr4c3");
buttonOne.textContent = '1';

const buttonSubtract= document.querySelector("#buttonr4c4");
buttonSubtract.textContent = '-';

const buttonZero = document.querySelector("#buttonr5c1");
buttonZero.textContent = '0';

const buttonDecimal = document.querySelector("#buttonr5c2");
buttonDecimal.textContent = '.';

const buttonPercent = document.querySelector("#buttonr5c3");
buttonPercent.textContent = '%';

const buttonEquals = document.querySelector("#buttonr5c4");
buttonEquals.textContent = '=';
