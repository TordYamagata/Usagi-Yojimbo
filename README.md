# 🐰 USAGI YOJIMBO — O Caminho do Rōnin

Um site temático e interativo dedicado ao universo de **Usagi Yojimbo**, personagem criado por **Stan Sakai**.

O projeto apresenta a história de Miyamoto Usagi, um samurai sem mestre que percorre o Japão feudal enfrentando desafios, conhecendo aliados e vivendo aventuras marcadas por honra, coragem e tradição.

Desenvolvido com **HTML5, CSS3 e JavaScript**, o site combina uma estética inspirada na cultura japonesa com recursos interativos e design responsivo.

---

## 🏯 Sobre o projeto

O **Usagi Yojimbo Archives** é um site informativo criado para apresentar o universo dos quadrinhos de Usagi Yojimbo.

A página reúne informações sobre o protagonista, personagens importantes, elementos do Japão feudal e curiosidades sobre a obra.

O visual utiliza tons escuros, vermelho-samurai, tipografia marcante e imagens temáticas para criar uma experiência imersiva.

## ✨ Funcionalidades

- 🐰 **Página inicial:** apresentação de Miyamoto Usagi com imagem circular.
- 📖 **História:** trajetória do protagonista e origem de sua jornada como rōnin.
- ⛩️ **O Universo:** cards ilustrados sobre Japão Feudal, Bushidō e Lendas e Yōkai.
- ⚔️ **Personagens:** galeria com imagens, descrições e informações adicionais.
- 🔎 **Filtros interativos:** navegação entre aliados, rivais e ameaças.
- 📜 **Linha do tempo:** acontecimentos importantes da história da franquia.
- 💡 **Curiosidades:** cards interativos com informações sobre a obra.
- 🌗 **Modo claro e escuro:** personalização da aparência.
- 📱 **Design responsivo:** adaptação para computadores, tablets e celulares.
- ✨ **Animações:** efeitos de transição e revelação durante a navegação.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura e organização das páginas |
| CSS3 | Estilização, animações e responsividade |
| JavaScript | Interatividade e manipulação do DOM |
| Google Fonts | Tipografia personalizada |

O projeto utiliza JavaScript puro (*Vanilla JavaScript*), sem necessidade de frameworks.

## 📂 Estrutura do projeto

```text
USAGI-YOJIMBO/
│
├── index.html
├── style.css
├── script.js
│
├── imagens/
│   ├── usagi.jpg
│   ├── tomoe.jpg
│   ├── gen.jpg
│   ├── kitsune.jpg
│   ├── chizu.jpg
│   ├── jei.jpg
│   ├── hikiji.jpg
│   ├── koji.jpg
│   ├── sasuke.jpg
│   ├── bushido.jpg
│   └── legendas-yokai.jpg
│
└── README.md
```

*Os nomes das imagens são exemplos baseados nos caminhos utilizados no código. Os arquivos precisam estar na pasta correspondente para aparecerem no site.*

## 🚀 Como executar

**1. Clone o repositório**

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

**2. Acesse a pasta do projeto**

```bash
cd SEU-REPOSITORIO
```

**3. Abra no Visual Studio Code**

```bash
code .
```

**4. Execute o site**

Abra o arquivo `index.html` no navegador ou utilize a extensão **Live Server** do VS Code.

Não é necessário instalar dependências.

## 🎨 Identidade visual

O design foi inspirado na estética do Japão feudal e na atmosfera dos quadrinhos de samurais.

A identidade visual combina:

- **Vermelho:** coragem, intensidade e tradição samurai.
- **Verde-escuro:** sobriedade e atmosfera cinematográfica.
- **Bege e creme:** inspiração em pergaminhos e materiais tradicionais japoneses.
- **Tipografia serifada:** aparência editorial e histórica.

## ⚙️ Recursos JavaScript

O JavaScript é responsável por diferentes funcionalidades do projeto.

**Galeria de personagens**

Os personagens são armazenados em um array de objetos, contendo nome, categoria, descrição, imagem e história.

Os cards são gerados dinamicamente na página.

**Filtros**

O usuário pode selecionar diferentes categorias de personagens, atualizando automaticamente os resultados exibidos.

**Modal interativo**

Ao clicar em um personagem, uma janela apresenta informações adicionais sobre sua história.

**Alternância de tema**

O site permite alternar entre aparência clara e escura, utilizando `localStorage` para salvar a preferência do usuário.

**Animações de rolagem**

A API `IntersectionObserver` permite revelar elementos gradualmente durante a navegação.

## 📚 Sobre Usagi Yojimbo

Criado em 1984 por **Stan Sakai**, Usagi Yojimbo acompanha as aventuras de Miyamoto Usagi, um coelho antrop
