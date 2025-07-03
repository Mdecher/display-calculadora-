let display = document.getElementById('display');
let currentInput = '';

function anexarNumero(number) {
  if (display.innerText === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  display.innerText = currentInput;
}

function lerOperador(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput[currentInput.length - 1];
  if (['+', '-', '*', '/'].includes(lastChar)) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += operator;
  display.innerText = currentInput;
}

function limparDisplay() {
  currentInput = '';
  display.innerText = '0';
}

function excluirUltimo() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || '0';
}

function calculate() {
  try {
    const result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
  } catch {
    display.innerText = 'Erro';
    currentInput = '';
  }
}
