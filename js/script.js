ffunction fazerLogin() {     
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email === '' || senha === '') {
    alert('Preencha todos os campos.');
    return;
  }

  // Simulando login com dados fixos
  if (email === 'teste@teste.com' && senha === '123456') {
    window.location.href = 'carteira.html';
  } else {
    alert('Email ou senha inválidos.');
  }

}
