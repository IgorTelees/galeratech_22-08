var verificaInput = () => {
    var valorInput = document.getElementById("meuInput").value;
    if (valorInput != "") {
      document.querySelector("#segundoButton").removeAttribute("disabled", "");
    } else {
      document.querySelector("#segundoButton").setAttribute("disabled", "");
    }
  };
  
  function funcaoOi(id) {
    document.getElementById(id).setAttribute("disabled", "disabled");
  }
  
  var addClass = () => {
    var botaoTchau = document.querySelector("#segundoButton");
    botaoTchau.classList.add("teste");
    botaoTchau.classList.remove("rerere");
    botaoTchau.removeAttribute("disabled", "");
    var primeiraDiv = document.querySelector("#primeiraDiv");
    primeiraDiv.classList.add("text-warning");
  };
  
  