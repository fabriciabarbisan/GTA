# 🎮 GTA — Seleção de Personagem

> **Não é só um jogo.** Escolha uma lenda do Dev City. Ou tire uma selfie e vire uma.

Projeto front-end inspirado na estética da franquia GTA: uma tela interativa de **seleção de personagem**, onde a pessoa escolhe entre os personagens disponíveis ou usa a câmera para tirar uma selfie e se transformar em um deles.

🔗 **Acesse o projeto no ar:** [projetogta-silk.vercel.app](https://projetogta-silk.vercel.app/)

---

## ✨ Funcionalidades

- Tela de seleção com os personagens **Lucia**, **Jason** e **CJ**
- Opção de **câmera/selfie** para criar o seu próprio personagem
- Interface com visual inspirado no universo GTA
- Layout responsivo, adaptado para diferentes tamanhos de tela

### 📸 Sobre a conversão da foto para o estilo GTA

A conversão da selfie para o estilo GTA é feita pelo **Puter**. Ao usar esse recurso, o Puter pede que a pessoa **faça um cadastro (crie uma conta)** para conseguir converter a foto. Esse passo é exigido pelo próprio serviço e não faz parte deste projeto.

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura da página
- **CSS3** — estilização e layout
- **JavaScript** — interatividade e troca de personagens
- **Puter** — conversão da foto para o estilo GTA
- **Vercel** — hospedagem e deploy

## 📁 Estrutura do projeto

```
GTA/
├── img/          # Imagens dos personagens e da câmera
├── index.html    # Estrutura da página
├── style.css     # Estilos
└── script.js     # Lógica e interações
```

## 🚀 Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/fabriciabarbisan/GTA.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd GTA
   ```

3. Abra o arquivo `index.html` no navegador.

   Se preferir, use a extensão **Live Server** do VS Code para recarregar a página automaticamente durante o desenvolvimento.

> Como o recurso de selfie usa a câmera, o navegador pode pedir permissão de acesso. Alguns navegadores só liberam a câmera em `localhost` ou em páginas `https`.

## 🌐 Deploy

O projeto está publicado na Vercel e é atualizado a cada push na branch `main`:

👉 https://projetogta-silk.vercel.app/

---

⭐ Se gostou do projeto, deixe uma estrela no repositório!

> Este é um projeto de estudo, sem fins comerciais, inspirado na franquia GTA. Todos os direitos sobre a marca e os personagens pertencem aos seus respectivos detentores.
