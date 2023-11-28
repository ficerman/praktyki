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

function checkPalindrome() {
  let input = Array.from(document.getElementById("palindromeInput").value)
  let reverse = []
  for (i = input.length - 1; i >= 0; i--) {
    reverse += input[i]
  }
  console.log(input)
  console.log(Array.from(reverse))
  isSame = true
  for (i = 0; i < input.length; i++) {
    if (input[i] != reverse[i]) {
      isSame = false
    }
  }
  if (isSame) {
    document.getElementById("wynikPal").innerText = "jest palindromem"
  } else {
    document.getElementById("wynikPal").innerText = "nie jest palindromem"
  }
}

function returnBiggest() {
  let input = Array.from(document.getElementById("arrayInput").value)
  let inputSplit = []
  let j = 0
  inputSplit[0] = ""

  for (i = 0; i < input.length; i++) {
    if (input[i] == ",") {
      j++
      inputSplit[j] = ""
    } else {
      inputSplit[j] += input[i]
    }
  }
  console.log(inputSplit)

  numerical = true
  for (i = 0; i < inputSplit.length; i++) {
    if (isNaN(inputSplit[i])) {
      numerical = false
    }
  }
  let biggest = inputSplit[0]
  if (numerical) {
    for (i = 1; i < inputSplit.length; i++) {
      if (inputSplit[i] > biggest) {
        biggest = inputSplit[i]
      }
    }
  } else {
    for (i = 1; i < inputSplit.length; i++) {
      if (inputSplit[i].length > biggest.length) {
        biggest = inputSplit[i]
      }
    }
  }
  console.log(numerical)
  document.getElementById("wynikBiggest").innerText = biggest
}

function checkAnagram() {
  let input1 = document.getElementById("anagramInput1").value
  let input2 = document.getElementById("anagramInput2").value
  isAnagram = true

  if (input1.length !== input2.length) {
    isAnagram = false
  }

  var amounts1 = {}
  var amounts2 = {}

  for (let i = 0; i < input1.length; i++) {
    let index = input1.charCodeAt(i) - 97
    amounts1[index] = (amounts1[index] || 0) + 1
  }

  for (let i = 0; i < input2.length; i++) {
    let index = input2.charCodeAt(i) - 97
    amounts2[index] = (amounts1[index] || 0) + 1
  }

  for (i = 0; i < amounts1.length; i++) {
    if (amounts1[i] != amounts2[i]) {
      isAnagram = false
    }
  }

  if (isAnagram) {
    document.getElementById("wynikAn").innerText = "sa anagramami"
  } else {
    document.getElementById("wynikAn").innerText = "nie sa anagramami"
  }
}
