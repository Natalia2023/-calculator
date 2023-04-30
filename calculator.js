let input = document.getElementById('result');

function addNumber(number) {
  input.value += number;
}

function addOperator(operator) {
  input.value += operator;
}

function clearResult() {
  input.value = '';
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (e) {
    input.value = 'Error';
  }
}
