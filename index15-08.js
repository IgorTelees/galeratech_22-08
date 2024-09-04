
var alunos = [
    {
      id: 1,
      nome: "Ana",
      email: "ana@gmail.com",
      telefone: "17 99999-8888",
      CPF: "022.456.402.17",
      dataNascimento: "2005-07-29",
      status: "Ativo",
    },
    {
      id: 2,
      nome: "Igor",
      email: "igor@gmail.com",
      telefone: "17 98134-6128",
      CPF: "490.467.168.64",
      dataNascimento: "2007-06-21",
      status: "Inativo",
    },
    {
      id: 3,
      nome: "Rogério",
      email: "rogerio@gmail.com",
      telefone: "21977777777",
      CPF: "98625619045",
      dataNascimento: "1995-01-19",
      status: "Ativo",
    },
  ];
  
  function carregarTabela() {
    var tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    alunos.forEach((aluno) => {
      tbody.innerHTML += `
              <tr class="text-center">
                  <td>${aluno.id}</td>
                  <td>${aluno.nome}</td>
                  <td>${aluno.email}</td>
                  <td>${aluno.status}</td>               
              </tr>
          `;
    });
  }
  
  function verificaDados() {
    var nome = document.getElementById("nomeAluno").value;
    var email = document.getElementById("emailAluno").value;
    if (nome == "" || email == "") {
      alert("Nome e Email são obrigatórios");
    } else {
      adicionarAluno();
    }
  }
  
  function adicionarAluno() {
    var id = alunos.length + 1;
    var nome = document.getElementById("nomeAluno").value;
    var email = document.getElementById("emailAluno").value;
    var telefone = document.getElementById("telefoneAluno").value;
    var CPF = document.getElementById("cpfAluno").value;
    var dataNascimento = document.getElementById("dataNascAluno").value;
  
    var novoAluno = {
      id: id,
      nome: nome,
      email: email,
      telefone: telefone,
      CPF: CPF,
      dataNascimento: dataNascimento,
      status: "Ativo",
    };
  
    document.getElementById("nomeAluno").value = "";
    document.getElementById("emailAluno").value = "";
    document.getElementById("telefoneAluno").value = "";
    document.getElementById("cpfAluno").value = "";
    document.getElementById("dataNascAluno").value = "";
  
    alunos.push(novoAluno);
    alert(`Aluno ${novoAluno.nome} cadastrado com sucesso`);
    this.carregarTabela();
  }
  