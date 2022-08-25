let calculation = "";
let number = "";
let results = 0;
let isOperator = false;
const resultsScreen = document.getElementById("results");
const clearAll = document.getElementById("clear-all");
clearAll.addEventListener("click", () => {
  calculation = "";
  number = "";
  resultsScreen.innerText = calculation;
});

const clearEntry = document.getElementById("clear-entry");
clearEntry.addEventListener("click", () => {
  calculation += number;
  number = "";
  calculation = calculation.substr(0, results.length - 1);
  resultsScreen.innerText = calculation;
});

const button = document.getElementsByClassName("button");
for (let index = 0; index < button.length; index++) {
  button[index].addEventListener("click", () => {
    const content = button[index].innerText;
    if (isOperator && isNaN(content)) {
      return;
    } else if (number.includes(".") && content === ".") {
      return;
    } else if (!isOperator && isNaN(content) && content !== ".") {
      number += content;
      calculation += number;
      number = "";
      isOperator = true;
      resultsScreen.innerText = calculation;
      return;
    }
    number += content;
    isOperator = false;
    resultsScreen.innerText = calculation + number;
  });
}

const equal = document.getElementById("equal");
equal.addEventListener("click", () => {
  calculation += number;
  number = "";
  results = eval(calculation);
  resultsScreen.innerText = `${calculation} = ${results}` ;
});
