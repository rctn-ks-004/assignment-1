let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

function solve() {
  let x = display.value;
  let y = math.evaluate(x);
  display.value = y;
}

function clear() {
  display.value = "0";
}

function delCalculation() {
  if (display.value === "Error") {
    display.value = 0;
  }

  if (display.value !== "" && display.value !== "0") {
    if (display.value.length === 1) {
      display.value = "0";
    } else {
      display.value = display.value.slice(0, -1);
    }
  }
}

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        clear();
        break;
      case "=":
        try {
          solve();
        } catch {
          display.value = "Error";
        }
        break;
      case "←":
        delCalculation();
        break;
      default:
        if (display.value === "0") {
          display.value = e.target.innerText;
        } else {
          display.value += e.target.innerText;
        }
    }
  });
});

function listenForKeyPress() {
  // add document event listener for all key presses
  document.addEventListener("keyup", (e) => {
    if (
      e.key == "0" ||
      e.key == "1" ||
      e.key == "2" ||
      e.key == "3" ||
      e.key == "4" ||
      e.key == "5" ||
      e.key == "6" ||
      e.key == "7" ||
      e.key == "8" ||
      e.key == "9" ||
      e.key == "+" ||
      e.key == "-" ||
      e.key == "*" ||
      e.key == "/"
    ) {
      if (document.activeElement !== display) {
        // focus element
        display.focus();
        // focus value
        if (display.value === "0") {
          display.value = e.key;
        } else {
          display.value += e.key;
        }
      }
    }

    if (e.key == "Enter") {
      try {
        solve();
      } catch {
        display.value = "Error";
      }
    }

    if (e.key == "Backspace") {
      delCalculation();
    }
  });
}

// call function
listenForKeyPress();
