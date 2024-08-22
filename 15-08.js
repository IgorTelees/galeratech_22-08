var alunos = [
    {
        id: 1,
        nome: 'Ana',
        email: 'ana@email.com',
        telefone: '9999-2222',
        CPF: '111.111.111-11',
        dataNascimento: '11/01/1990',
        status: 'Ativo',
    },
    {
        id: 2,
        nome: 'Bia',
        email: 'bia@email.com',
        telefone: '9999-3333',
        CPF: '222.222.222-22',
        dataNascimento: '12/02/1991',
        status: 'Ativo',
    },
    {
        id: 3,
        nome: 'Carlos',
        email: 'carlos@email.com',
        telefone: '9999-4444',
        CPF: '333.333.333-33',
        dataNascimento: '13/03/1992',
        status: 'Ativo',
    },  
];

function carregarTabela(){
    var tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    alunos.forEach(aluno => {
        var tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${aluno.id}</td>
            <td>${aluno.nome}</td>
            <td>${aluno.email}</td>
            <td>${aluno.telefone}</td>
            <td>${aluno.CPF}</td>
            <td>${aluno.dataNascimento}</td>
            <td>${aluno.status}</td>
        `;
    });
}
function salvar(){
    var id = document.getElementById("id").value;
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var CPF = document.getElementById("CPF").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var status = document.getElementById("status").value;
}
