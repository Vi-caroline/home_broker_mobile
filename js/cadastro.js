document.getElementById('form-cadastro').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  if (!nome || !email || !senha) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Validação da senha
  if (senha.length > 9) {
    alert('A senha deve ter no máximo 9 caracteres.');
    return;
  }

  if (!/[A-Z]/.test(senha)) {
    alert('A senha deve conter pelo menos uma letra maiúscula.');
    return;
  }

  if (!/[a-z]/.test(senha)) {
    alert('A senha deve conter pelo menos uma letra minúscula.');
    return;
  }

  if (!/[0-9]/.test(senha)) {
    alert('A senha deve conter pelo menos um número.');
    return;
  }

  // Salva os dados no localStorage
  const usuario = {
    nome,
    email,
    senha
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));
  alert('Cadastro realizado com sucesso! Agora faça o login.');

  // Redireciona para login
  window.location.href = 'login.html';
});