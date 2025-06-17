const displayScreen = document.getElementById("displayScreen");
let shouldResetDisplayScreen = false;
const operators = "+-*/%";

function updateDisplayScreen(input) {
  if (shouldResetDisplayScreen) {
    if (operators.includes(input)) {
      shouldResetDisplay = false;
    } else {
      displayScreen.value = "";
      shouldResetDisplay = false;
    }
  }

  const current = displayScreen.value;
  const lastChar = current.slice(-1);

  if (operators.includes(lastChar) && operators.includes(input)) {
    displayScreen.value = current.slice(0, -1) + input;
    return;
  }

  if (input === ".") {
    const parts = current.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];

    if (lastPart.includes(".")) {
      return;
    }

    if (lastPart === "") {
      displayScreen.value += "0";
    }
  }

  displayScreen.value += input;
}

function clearDisplayScreen() {
  displayScreen.value = "";
  shouldResetDisplayScreen = false;
}

function deleteLast() {
  displayScreen.value = displayScreen.value.slice(0, -1);
}

function calculate() {
  try {
    displayScreen.value = eval(displayScreen.value);
    shouldResetDisplayScreen = true;
  } catch (error) {
    displayScreen.value = "Error";
    shouldResetDisplayScreen = true;
  }
}
