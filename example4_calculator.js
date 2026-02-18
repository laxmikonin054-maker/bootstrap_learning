function press(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  let exp = document.getElementById("display").value;
  document.getElementById("display").value = eval(exp);
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
