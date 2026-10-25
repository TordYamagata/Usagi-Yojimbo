
/* ==========================================
   USAGI YOJIMBO — YOJIMBO ARCHIVES
   SCRIPT.JS
========================================== */

"use strict";

/* ==========================================
   1. PERSONAGENS
========================================== */

const characters = [
{
  id: 1,
  name: "Miyamoto Usagi",
  category: "aliados",
  type: "O SAMURAI ERRANTE",
  symbol: "兎",
  image: "https://i.pinimg.com/1200x/59/29/60/59296042d4949a5c627724f765abad14.jpg",
  description:
    "Um coelho samurai que percorre o Japão em busca de honra e sabedoria.",
  details:
    "Miyamoto Usagi é o protagonista da série criada por Stan Sakai."
},

  {
    id: 2,
    name: "Tomoe Ame",
    category: "aliados",
    type: "A GUERREIRA LEAL",
    symbol: "巴",
    image: "https://i.pinimg.com/1200x/c2/7c/15/c27c1540259776116221a17eb288f21d.jpg",
    description:
      "Uma samurai habilidosa, fiel ao seu senhor e amiga de Usagi.",
    details:
      "Tomoe Ame é uma guerreira corajosa e uma das personagens mais importantes do universo de Usagi Yojimbo. Serve ao senhor Noriyuki, do clã Geishu. Sua inteligência, habilidade com a espada e senso de dever fazem dela uma aliada valiosa de Miyamoto Usagi."
  },

  {
    id: 3,
    name: "Gen",
    category: "aliados",
    type: "O CAÇADOR DE RECOMPENSAS",
    symbol: "犀",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiq79OY-uZzDLQEgtqRrKPpULxzMYp0QRYwBiGs4BliQG2eyzYx6RLutm&s=10",
    description:
      "Um rinoceronte aventureiro, mercenário e companheiro ocasional de Usagi.",
    details:
      "Murakami Gennosuke, conhecido como Gen, é um caçador de recompensas com aparência de rinoceronte. Costuma agir por dinheiro e apresentar uma personalidade rude, mas também demonstra coragem, lealdade e preocupação com seus amigos."
  },

  {
    id: 4,
    name: "Kitsune",
    category: "aliados",
    type: "A RAPOSA ASTUTA",
    symbol: "狐",
    image: "https://i.pinimg.com/736x/00/14/7d/00147dae5c47dd5ba94853f4a67cb207.jpg",
    description:
      "Uma ladra carismática que utiliza inteligência e astúcia para sobreviver.",
    details:
      "Kitsune é uma raposa que vive de pequenos golpes, furtos e apresentações artísticas. Embora tenha uma moralidade diferente da de Usagi, os dois desenvolvem uma relação de amizade e respeito. Sua personalidade acrescenta humor e imprevisibilidade às aventuras."
  },

  {
    id: 5,
    name: "Chizu",
    category: "aliados",
    type: "A NINJA",
    symbol: "忍",
    image: "https://i.pinimg.com/1200x/c3/7f/23/c37f2372003635d08823341559041a6b.jpg",
    description:
      "Uma kunoichi habilidosa envolvida nas disputas entre clãs ninja.",
    details:
      "Chizu é uma guerreira ninja associada ao clã Neko. Sua trajetória envolve conflitos internos, lealdade e disputas pelo poder. Ela possui uma relação de respeito com Usagi, apesar das diferenças entre os caminhos que seguem."
  },

  {
    id: 6,
    name: "Jei",
    category: "rivais",
    type: "A ESPADA DA VINGANÇA",
    symbol: "邪",
    image: "https://i.pinimg.com/736x/89/86/a7/8986a7ab5b3fdbc99b2436f703a90bec.jpg",
    description:
      "Um guerreiro perturbador que acredita realizar uma missão divina.",
    details:
      "Jei é um dos adversários mais perigosos e assustadores de Usagi. Convencido de que atua como instrumento de uma vontade divina, pratica atos violentos e persegue aqueles que considera pecadores. Sua presença introduz elementos de terror e sobrenatural na série."
  },

  {
    id: 7,
    name: "Lord Hikiji",
    category: "rivais",
    type: "O SENHOR DA GUERRA",
    symbol: "将",
    image: "https://images.squarespace-cdn.com/content/v1/5e6c6d81898be713ac68c06e/997c5ed9-6ee1-48ff-aa17-b0073a072954/33.jpg",
    description:
      "Um poderoso e ambicioso senhor feudal ligado ao passado de Usagi.",
    details:
      "Lord Hikiji é um dos grandes antagonistas do universo de Usagi Yojimbo. Sua ambição política e suas campanhas militares provocam conflitos que afetam diretamente a trajetória de Miyamoto Usagi. Ele representa as disputas de poder do Japão feudal."
  },

  {
    id: 8,
    name: "Nakamura Koji",
    category: "rivais",
    type: "O MESTRE DA ESPADA",
    symbol: "剣",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdPRqSfXZUNmACLITrV6vJxqoWcpc3n0IUTL5K41c5xrdT3FiHlRifjc&s=10",
    description:
      "Um espadachim formidável que desafia as habilidades de Usagi.",
    details:
      "Nakamura Koji é um experiente guerreiro cuja extraordinária habilidade com a espada o coloca entre os adversários mais marcantes de Usagi. Seus encontros exploram a técnica, a honra e a filosofia dos samurais."
  },

  {
    id: 9,
    name: "Sasuke",
    category: "aliados",
    type: "O CAÇADOR DE DEMÔNIOS",
    symbol: "魔",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxXJLxIr2zrtYNjvZCmz46xZXkZF1c-l24Z3OoW1xeQ&s=10",
    description:
      "Um espadachim misterioso especializado em ameaças sobrenaturais.",
    details:
      "Sasuke é um caçador de demônios que combate criaturas malignas e manifestações sobrenaturais. Reservado e extremamente habilidoso, aparece em histórias que exploram o lado fantástico do universo de Usagi Yojimbo."
  }
];

/* ==========================================
   2. ELEMENTOS DO SITE
========================================== */

const characterGrid = document.getElementById("characterGrid");

const filterButtons = document.querySelectorAll(".filter");

const characterModal = document.getElementById("characterModal");

const modalContent = document.getElementById("modalContent");

const closeModalButton = document.getElementById("closeModal");

const menuButton = document.getElementById("menuBtn");

const navigation = document.getElementById("nav");

const themeButton = document.getElementById("themeBtn");

const progressBar = document.getElementById("progress");

/* ==========================================
   3. EXIBIR OS PERSONAGENS
========================================== */


function renderCharacters(filter = "todos") {

  if (!characterGrid) {
    return;
  }

  const filteredCharacters = characters.filter((character) => {
    return filter === "todos" || character.category === filter;
  });

  characterGrid.innerHTML = filteredCharacters.map((character) => {

    const categoryLabel =
      character.category === "aliados"
        ? "ALIADO"
        : "RIVAL / AMEAÇA";

    return `
      <button
        class="character-card"
        type="button"
        data-id="${character.id}"
        aria-label="Conhecer ${character.name}"
      >

        <div class="character-visual">

          <img
            src="${character.image}"
            alt="${character.name}"
            class="character-image"
            loading="lazy"
          >

        </div>

        <div class="character-info">

          <span class="character-type">
            ${categoryLabel}
          </span>

          <h3>${character.name}</h3>

          <p>${character.description}</p>

          <span class="character-link">
            CONHEÇA A HISTÓRIA ↗
          </span>

        </div>

      </button>
    `;

  }).join("");

}


/* Exibe todos os personagens ao abrir o site */

renderCharacters();

/* ==========================================
   4. FILTROS DOS PERSONAGENS
========================================== */

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const filter = button.dataset.filter;

    filterButtons.forEach((otherButton) => {

      const isActive = otherButton === button;

      otherButton.classList.toggle("active", isActive);

      otherButton.setAttribute(
        "aria-pressed",
        String(isActive)
      );

    });

    renderCharacters(filter);

  });

});

/* ==========================================
   5. ABRIR MODAL DO PERSONAGEM
========================================== */

function openCharacterModal(characterId) {

  const character = characters.find((item) => {
    return item.id === Number(characterId);
  });

  if (!character || !characterModal || !modalContent) {
    return;
  }

  modalContent.innerHTML = `
    <div class="modal-symbol" aria-hidden="true">
      ${character.symbol}
    </div>

    <span class="modal-category">
      ${character.type}
    </span>

    <h2 id="modalTitle">
      ${character.name}
    </h2>

    <p>
      ${character.details}
    </p>
  `;

  if (!characterModal.open) {
    characterModal.showModal();
  }

  document.body.classList.add("modal-open");

}

/* Evento delegado para os cards */

if (characterGrid) {

  characterGrid.addEventListener("click", (event) => {

    const selectedCard = event.target.closest(".character-card");

    if (!selectedCard) {
      return;
    }

    const characterId = selectedCard.dataset.id;

    openCharacterModal(characterId);

  });

}

/* ==========================================
   6. FECHAR MODAL
========================================== */

function closeCharacterModal() {

  if (!characterModal) {
    return;
  }

  characterModal.close();

  document.body.classList.remove("modal-open");

}

if (closeModalButton) {

  closeModalButton.addEventListener(
    "click",
    closeCharacterModal
  );

}

if (characterModal) {

  /* Fechar clicando fora do conteúdo */

  characterModal.addEventListener("click", (event) => {

    if (event.target === characterModal) {
      closeCharacterModal();
    }

  });

  /* Fechar usando Escape */

  characterModal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });

}

/* ==========================================
   7. MENU RESPONSIVO
========================================== */

function closeMobileMenu() {

  if (!navigation || !menuButton) {
    return;
  }

  navigation.classList.remove("open");

  menuButton.setAttribute("aria-expanded", "false");

  menuButton.setAttribute("aria-label", "Abrir menu");

}

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );

  });

  /* Fecha o menu quando o usuário escolhe uma seção */

  navigation.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", closeMobileMenu);

  });

  /* Fecha o menu ao clicar fora */

  document.addEventListener("click", (event) => {

    const clickedInsideMenu = navigation.contains(event.target);

    const clickedMenuButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      closeMobileMenu();
    }

  });

  /* Fecha o menu ao voltar para desktop */

  window.addEventListener("resize", () => {

    if (window.innerWidth > 850) {
      closeMobileMenu();
    }

  });

}

/* ==========================================
   8. MODO CLARO E ESCURO
========================================== */

const themeStorageKey = "usagi-yojimbo-theme";

function applyTheme(theme) {

  const darkMode = theme === "dark";

  document.body.classList.toggle(
    "dark-theme",
    darkMode
  );

  if (themeButton) {

    themeButton.textContent = darkMode ? "☾" : "☼";

    themeButton.setAttribute(
      "aria-label",
      darkMode ? "Ativar tema claro" : "Ativar tema escuro"
    );

  }

}

/* Recuperar tema salvo */

let savedTheme = null;

try {
  savedTheme = localStorage.getItem(themeStorageKey);
} catch (error) {
  savedTheme = null;
}

applyTheme(savedTheme === "dark" ? "dark" : "light");

/* Alternar tema */

if (themeButton) {

  themeButton.addEventListener("click", () => {

    const darkModeActive =
      document.body.classList.contains("dark-theme");

    const newTheme = darkModeActive ? "light" : "dark";

    applyTheme(newTheme);

    try {
      localStorage.setItem(themeStorageKey, newTheme);
    } catch (error) {
      // O site continua funcionando sem armazenamento.
    }

  });

}

/* ==========================================
   9. BARRA DE PROGRESSO DA PÁGINA
========================================== */

function updateScrollProgress() {

  if (!progressBar) {
    return;
  }

  const scrollTop =
    window.scrollY || document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = scrollHeight > 0
    ? (scrollTop / scrollHeight) * 100
    : 0;

  const safeProgress = Math.min(
    100,
    Math.max(0, progress)
  );

  progressBar.style.width = `${safeProgress}%`;

}

window.addEventListener(
  "scroll",
  updateScrollProgress,
  { passive: true }
);

window.addEventListener(
  "resize",
  updateScrollProgress
);

updateScrollProgress();

/* ==========================================
   10. ANIMAÇÃO AO ROLAR A PÁGINA
========================================== */

const revealElements = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {

  const revealObserver = new IntersectionObserver(

    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px"
    }

  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

} else {

  revealElements.forEach((element) => {
    element.classList.add("visible");
  });

}

/* ==========================================
   11. CURIOSIDADES INTERATIVAS
========================================== */

const factCards = document.querySelectorAll(".fact-card");

factCards.forEach((card) => {

  card.addEventListener("click", () => {

    const isCurrentlyOpen = card.classList.contains("open");

    /* Fecha as outras curiosidades */

    factCards.forEach((otherCard) => {

      otherCard.classList.remove("open");

      otherCard.setAttribute(
        "aria-expanded",
        "false"
      );

      const otherLabel =
        otherCard.querySelector(".fact-more");

      if (otherLabel) {
        otherLabel.textContent = "+ DESCUBRA MAIS";
      }

    });

    /* Abre o card selecionado */

    if (!isCurrentlyOpen) {

      card.classList.add("open");

      card.setAttribute(
        "aria-expanded",
        "true"
      );

      const currentLabel =
        card.querySelector(".fact-more");

      if (currentLabel) {
        currentLabel.textContent = "− MOSTRAR MENOS";
      }

    }

  });

});

/* ==========================================
   12. NAVEGAÇÃO SUAVE
========================================== */

const internalLinks =
  document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    const destinationId = link.getAttribute("href");

    if (!destinationId || destinationId === "#") {
      return;
    }

    const destination =
      document.getElementById(destinationId.slice(1));

    if (!destination) {
      return;
    }

    event.preventDefault();

    destination.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });

    if (window.location.hash !== destinationId) {
      history.replaceState(null, "", destinationId);
    }

  });

});

/* ==========================================
   13. INICIALIZAÇÃO
========================================== */

console.log("USAGI YOJIMBO — O CAMINHO DO RŌNIN");
console.log("Site carregado com sucesso!");
