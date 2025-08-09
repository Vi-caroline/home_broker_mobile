document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const emailDigitado = document.getElementById('email').value;
            const senhaDigitada = document.getElementById('senha').value;

            const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'));

            if (usuarioSalvo && emailDigitado === usuarioSalvo.email && senhaDigitada === usuarioSalvo.senha) {
               window.location.href = 'carteira.html';
            } else {
                alert('Email ou senha inválidos');
            }
        });
    }
});
