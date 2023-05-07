// JS Para cadastro no site

const cadastrobtn = document.getElementById('submit-btn');
cadastrobtn.addEventListener('click', function (event) {
    event.preventDefault();

    const nomeCadastro = document.getElementById('nomeCadastro').value;
    const emailCadastro = document.getElementById('emailCadastro').value;
    const senhaCadastro = document.getElementById('senhaCadastro').value;

    if (nomeCadastro && emailCadastro && senhaCadastro) {
        alert('Usuário cadastrado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos');
    }
    return false;
});
