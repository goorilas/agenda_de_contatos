const form = document.getElementById('form-agenda');

function criarContato(nome, telefone) {
    return {nome: nome, telefone: telefone};
}

let agenda = [];

function adicionarContato() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    if (nome && telefone) {
        const novoContato = criarContato(nome, telefone);
        agenda.push(novoContato);
        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
        atualizarTabela();
    } else {
        alert("Por favor, insira um nome e um telefone.");
    }
}

function atualizarTabela() {
    const corpoTabela = document.getElementById("corpo-tabela");
    corpoTabela.innerHTML = "";
    agenda.forEach(function(contato) {
        const linha = "<tr><td>" + contato.nome + "</td><td>" + contato.telefone + "</td></tr>";
        corpoTabela.innerHTML += linha;
    })
}