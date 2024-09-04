function salvar() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;
    const mensagem = document.getElementById('mensagem');

    if (idade < 0) {
        mensagem.textContent = "Não foi possível realizar seu cadastro, você precisa ter pelo menos 1 ano de idade.";
        mensagem.style.color = 'red';
        } else {
        mensagem.textContent = `${nome}, residente de ${cidade}, ${uf}, foi cadastrado com sucesso!`;
        mensagem.style.color = 'green';
        alert("Cadastro concluído com sucesso!")
        }
}

function limpar() {
    document.getElementById('cadastroForm').reset();
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = '';
    mensagem.className = '';
}