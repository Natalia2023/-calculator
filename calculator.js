// Отримання елементів DOM
const result = document.getElementById('result');
const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');

// Функція, яка додає цифри до введеного значення
function addNumber(number) {
  result.value += number;
}

// Функція, яка додає оператори до введеного значення
function addOperator(operator) {
  result.value += operator;
}

// Функція, яка очищує введене значення
function clearResult() {
  result.value = '';
}

// Функція, яка рахує результат
function calculate() {
  result.value = eval(result.value);
}

// Надання обробника подій для кожної кнопки
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    addNumber(this.textContent);
  });
});

operators.forEach(function(operator) {
  operator.addEventListener('click', function() {
    addOperator(this.textContent);
  });
});

clearButton.addEventListener('click', function() {
  clearResult();
});

equalButton.addEventListener('click', function() {
  calculate();
});
