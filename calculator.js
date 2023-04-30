// знаходження потрібних елементів DOM
const result = document.getElementById('result');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.buttons button:not(.operator)');
const equal = document.querySelector('.buttons button:last-child');
const clear = document.querySelector('.buttons button:nth-child(4)');

// змінні для зберігання значень
let currentNumber = '';
let firstNumber = '';
let operator = '';

// функція для введення цифр
function numberClicked(number) {
  currentNumber += number;
  result.value =
// функція для очищення поля вводу
function clearClicked() {
  currentNumber = '';
  firstNumber = '';
  operator = '';
  result.value = '';
  }
};
  
  // функція для вибору операції
  function operatorClicked(op) {
  if (currentNumber !== '') {
  firstNumber = currentNumber;
  operator = op;
  currentNumber = '';
  }
  }
  
  // функція для обчислення результату
  function calculateResult() {
  let finalResult = '';
  if (operator === '+') {
  finalResult = parseFloat(firstNumber) + parseFloat(currentNumber);
  } else if (operator === '-') {
  finalResult = parseFloat(firstNumber) - parseFloat(currentNumber);
  } else if (operator === '*') {
  finalResult = parseFloat(firstNumber) * parseFloat(currentNumber);
  } else if (operator === '/') {
  finalResult = parseFloat(firstNumber) / parseFloat(currentNumber);
  }
  result.value = finalResult;
  firstNumber = finalResult;
  currentNumber = '';
  operator = '';
  }
  
  // додавання обробників подій
  numbers.forEach((button) => {
  button.addEventListener('click', () => {
  numberClicked(button.textContent);
  });
  });
  
  operators.forEach((button) => {
  button.addEventListener('click', () => {
  operatorClicked(button.textContent);
  });
  });
  
  equal.addEventListener('click', calculateResult);
  clear.addEventListener('click', clearClicked);
  

  
  
  
  
  
  