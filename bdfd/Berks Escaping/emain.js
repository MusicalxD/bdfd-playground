function output(id) {
    const code = document.getElementById(id).value;
    const final = code.replaceAll('$','%{DOL}%').replaceAll(']','\\]').replaceAll(';','\\;');
    const unescaped = code.replaceAll('%{DOL}%','$').replaceAll('\\]',']').replaceAll('\\;',';');
      document.getElementById("output").value = final;
      document.getElementById("unescaped").value = unescaped;
      document.getElementById("looped").value = 
        "$eval[$repeatMessage[5;$repeatMessage[5;%{DOL}%optOff[\n" +
        final
        + "\n\\]]]]";
          
    }