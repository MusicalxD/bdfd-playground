function replaceWord() {
    const code = document.getElementById('codeinput').value;
    const oldtext = document.getElementById('oldtext').value;
    const newtext = document.getElementById('newtext').value;
    const finale = code.replaceAll(oldtext, newtext);
    document.getElementById('output').innerHTML = finale;
}