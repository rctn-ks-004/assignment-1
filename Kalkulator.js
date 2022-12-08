let calculated = false;
let operator = false;

function clr() {
  calculated = false;
  document.getElementById('display').value = '';
}
function clrback() {
  let value = document.getElementById('display').value.slice(-1);
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    operator = false;
  }
  if (calculated === false) {
    document.getElementById('display').value = document
      .getElementById('display')
      .value.slice(0, -1);
  }
}

function display(value) {
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    calculated = false;
    if (calculated === false && operator === false) {
      document.getElementById('display').value += value;
    }
    operator = true;
  } else {
    operator = false;
    if (calculated === false && operator === false) {
      document.getElementById('display').value += value;
    }
  }
}

function calc() {
  let value = document.getElementById('display').value;
  let result = eval(value);
  calculated = true;
  document.getElementById('display').value = result;
}
