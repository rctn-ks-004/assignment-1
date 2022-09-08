const buttons = document.querySelectorAll(".btn");
const view = document.querySelector(".view");

const operator = "AC/CE*-+";
let arr = ["", "", ""];
let arrow = 0;

function calculate() {
  let temp;
  const operand = arr[1];
  const first = Number(arr[0]);
  const second = Number(arr[2]);

  if (operand === "+") {
    temp = first + second;
  } else if (operand === "-") {
    temp = first - second;
  } else if (operand === "/") {
    temp = (first / second).toFixed(4);
  } else if (operand === "*") {
    temp = first * second;
  }
  return temp;
}
buttons.forEach((butt) => {
  butt.addEventListener("click", function () {
    const el = butt.innerHTML;

    if (!operator.includes(el) && el !== "=") {
      if (arr[1]) {
        arr[2] += el;
        arrow = 2;
        view.innerHTML = `${[...arr].join(" ")}`;
      } else {
        arr[0] += el;
        arrow = 0;
        view.innerHTML = arr[0];
      }
    }
    if (operator.includes(el) && arr[0]) {
      if (el === "CE") {
        arrow !== 1 ? (arr[arrow] = "") : "";
      } else if (el === "AC") {
        arr = ["", "", ""];
      } else if (!arr[2]) {
        arr[1] = el;
        arrow = 1;
      }
    }
    if (!arr[0]) {
      view.innerHTML = "0";
    } else if (arr[0] && arr[1] && arr[2] && "+-/*".includes(el)) {
      view.innerHTML = `${[...arr].join(" ")} = ${calculate()}`;
      arr = [calculate(), el, ""];
      arrow = 2;
    } else if (el === "AC") {
      view.innerHTML = "0";
    } else if (arr.every((arr) => arr != "") && el === "=") {
      view.innerHTML = calculate();
      arr = ["", "", ""];
      arrow = 0;
    } else {
      view.innerHTML = `${[...arr].join(" ")}`;
    }
  });
});
