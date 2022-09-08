const calculator = {
  display: "0",
};

function updateDisplay() {
  document.querySelector("#display").innerText = calculator.display;
}

function clearCalculator() {
  calculator.display = "0";
}

function clearEntry() {
  if (calculator.display.length === 1) {
    calculator.display = "0";
  } else {
    calculator.display = calculator.display.slice(0, -1);
  }
}

function inputDigit(digit) {
  if (calculator.display === "0") {
    if (digit === ".") {
      calculator.display += digit;
    } else {
      calculator.display = digit;
    }
  } else {
    calculator.display += digit;
  }
}

function generateResult() {
  return eval(calculator.display);
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  const operator = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
  };

  button.addEventListener("click", (e) => {
    const target = e.target;
    let resultNumber = "";

    if (target.classList.contains("all-clear")) {
      clearCalculator();
      updateDisplay();
      return;
    }

    if (target.classList.contains("clear-entry")) {
      clearEntry();
      updateDisplay();
      return;
    }

    if (target.classList.contains("result")) {
      resultNumber = generateResult();
      inputDigit(` ${target.innerText} ${resultNumber}`);
      updateDisplay();
      return;
    }

    if (operator[target.innerText]) {
      let size = calculator.display.length;
      if (operator[calculator.display[size - 2]]) {
        alert("Isilah Angka Setelah Operator");
      } else {
        inputDigit(` ${target.innerText} `);
      }
    } else if (target.innerText === ".") {
      let size = calculator.display.length;
      if (operator[calculator.display[size - 2]]) {
        alert("Isilah Angka Setelah Operator");
      } else {
        inputDigit(`${target.innerText}`);
      }
    } else {
      inputDigit(target.innerText);
    }
    updateDisplay();
  });
}
