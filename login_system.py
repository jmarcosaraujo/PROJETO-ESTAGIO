# login_system.py

# Dicionário de usuários (usuário: senha)
usuarios = {
    "admin": "1234",
    "teste": "abcd",
    "usuario": "senha123"
}

print("=== Sistema de Login ===")

# Solicita credenciais
user = input("Usuário: ").strip()
senha = input("Senha: ").strip()

# Validação
if user in usuarios and usuarios[user] == senha:
    print(f"\n✅ Login bem-sucedido! Bem-vindo(a), {user}.")
else:
    print("\n❌ Usuário ou senha incorretos. Tente novamente.")
