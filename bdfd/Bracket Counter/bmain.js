function countBrackets() {
    let code = document.getElementById("inputText").value;
    let brackets = { "[": 0, "]": 0 };

    for (let i = 0; i < code.length; i++) {
    if (code[i] === "[") {
      brackets["["]++;
    } else if (code.substr(i, 9) === "%ESCAPED%") {
      brackets["]"]++;
      i += 8;
    } else if (code[i] === "]") {
      brackets["]"]++;
    }
  }

    if (brackets["["] === brackets["]"]) {
      document.getElementById("result").innerHTML =
        "Brackets are equal <br><br> [ => " + brackets["["] + "<br><br> ] => " + brackets["]"];
    } else {
      document.getElementById("result").innerHTML =
      "Brackets are not equal <br><br> [ => " + brackets["["] + "<br><br> ] => " + brackets["]"];
    }
  }