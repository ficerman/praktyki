function calculate() {
  let a = parseFloat(document.getElementById("a").value)
  let b = parseFloat(document.getElementById("b").value)

  let result = 0
  if (document.getElementById("dod").checked) {
    result = a + b
  } else if (document.getElementById("od").checked) {
    result = a - b
  } else if (document.getElementById("mnoz").checked) {
    result = a * b
  } else if (document.getElementById("dziel").checked) {
    result = a / b
  }

  if (document.getElementById("dziel").checked && b == 0) {
    document.getElementById("wynik").innerText = "dzielenie przez 0"
  } else {
    document.getElementById("wynik").innerText = result
  }
}
