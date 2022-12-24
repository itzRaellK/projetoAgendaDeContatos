const form = document.getElementById("agenda-contato");

const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    novaLinha();
    atualizaCadastro();
});

function novaLinha() {
    const inputNome = document.getElementById("nome");
    const inputTelefone = document.getElementById("telefone");

    const successMessage = `Contato cadastrado`;
    const errorMessage = `Esse contato já existe na agenda`;

    const divSuccessMessage = document.querySelector(".success");
    const divErrorMessage = document.querySelector(".error");

    if(nomes.includes(inputNome.value) || telefones.includes(inputTelefone.value)) {
        divErrorMessage.innerHTML = errorMessage;
        divErrorMessage.style.display = 'block';
        divSuccessMessage.style.display = 'none';
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTelefone);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        divSuccessMessage.innerHTML = successMessage;
        divSuccessMessage.style.display = 'block';
        divErrorMessage.style.display = 'none';
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaCadastro() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}