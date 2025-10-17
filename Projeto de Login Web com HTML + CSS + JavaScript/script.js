// Usuários simulados
const usuarios = {
  admin: "1234",
  teste: "abcd",
  usuario: "senha123"
};

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const senha = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (usuarios[user] && usuarios[user] === senha) {
    message.textContent = `✅ Bem-vindo, ${user}! Login realizado com sucesso.`;
    message.style.color = "lime";
  } else {
    message.textContent = "❌ Usuário ou senha incorretos.";
    message.style.color = "red";
  }
});
