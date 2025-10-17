# PROJETO-ESTAGIO
# 🔐 Sistema de Login — Python & JavaScript

Projeto simples desenvolvido para praticar **lógica de programação** e **conceitos básicos de autenticação de usuários**, utilizando **Python** no terminal e uma **versão web** com **HTML, CSS e JavaScript**.

---

## 🧠 Objetivo do Projeto
O objetivo é demonstrar o funcionamento de um **sistema de login e senha**, aplicando:
- Validação de credenciais (usuário e senha)
- Controle de fluxo (`if`, `else`)
- Estruturas de dados (dicionário)
- Manipulação de DOM e eventos no JavaScript
- Separação de camadas (HTML, CSS, JS)

---

## ⚙️ Versão 1 — Login no Terminal (Python)

**Arquivo:** `login_system.py`

### 📋 Descrição:
Simula um sistema de login básico diretamente no terminal, validando usuários armazenados em um dicionário.

### 🧩 Código principal:
```python
usuarios = {
    "admin": "1234",
    "teste": "abcd",
    "usuario": "senha123"
}

print("=== Sistema de Login ===")

user = input("Usuário: ").strip()
senha = input("Senha: ").strip()

if user in usuarios and usuarios[user] == senha:
    print(f"\n✅ Login bem-sucedido! Bem-vindo(a), {user}.")
else:
    print("\n❌ Usuário ou senha incorretos. Tente novamente.")
