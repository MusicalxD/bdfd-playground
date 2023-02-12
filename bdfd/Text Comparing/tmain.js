function textComparing() {
    var inputText1 = document.getElementById("inputText1").value;
    var inputText2 = document.getElementById("inputText2").value;
    var length = Math.max(inputText1.length, inputText2.length);
    var count = 0;
    for (var i = 0; i < length; i++) {
      if (inputText1[i] === inputText2[i]) {
        count++;
      }
    }
    var matchRate = (count / length) * 100;
    document.getElementById("result").innerHTML =
      "Match rate: " + matchRate.toFixed(2) + "%<br>" +
      "Differences: " + (length - count) + " characters.";
}