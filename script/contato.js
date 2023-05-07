// JS Para entrar em contato com o site

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
        alert('Mensagem enviada com sucesso');
    } else {
        alert('Por favor, preencha todos os campos');
    }
});
