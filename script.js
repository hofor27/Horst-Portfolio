// Load the default language (English)
let currentLanguage = "en";

const languageData = {
  en: {
    language: "English",
    myintro: "Hi there 👋, I'm",
    myposition: "I'm a Frontend Developer",
    headerName: "Horst",
    projectsHeading: "Projects",
    projectsCard1Title: "Guess My Number App",
    projectsCard1Description:
      "This is an app created with Vanilla JavaScript. It allows users to guess the correct number!",
    projectsCard2Title: "Quote of the Day",
    projectsCard2Description:
      "This is an app created with Vanilla JavaScript. It displays a random quote and author!",
    projectsCard3Title: "Movies App",
    projectsCard3Description:
      "This is an app created with React. We can see Live movies data from the API and can see the movie details",
    projectsCard4Title: "Web Services",
    projectsCard4Description:
      "This is an app created with HTML. It's my company website where you can see the list services we are providing",
    projectsCard5Title: "Belmonte Consultoría",
    projectsCard5Description:
      "This is an app created with React. We provide consultation services",

    skillsHeading: "Skills",
    frontendSkillsTitle: "Frontend",
    othersSkillsTitle: "Others",
    contactHeading: "Contact",
    contactParagraph:
      "Want to get in touch? Contact me on any of the platforms.",
    downloadButton: "Download My Resume",
    copyrightText: "© Copyright 2023 Horst Portfolio App",
  },
  pt: {
    language: "Português",
    myintro: "Olá pessoal 👋, eu sou",
    myposition: "Sou um Desenvolvedor Frontend",
    headerName: "Horst",
    projectsHeading: "Projetos",
    projectsCard1Title: "Aplicativo Guess My Number",
    projectsCard1Description:
      "Este é um aplicativo criado com Vanilla JavaScript. Permite aos usuários adivinhar o número correto!",
    projectsCard2Title: "Citação do Dia",
    projectsCard2Description:
      "Este é um aplicativo criado com Vanilla JavaScript. Ele exibe uma citação aleatória e o autor!",
    skillsHeading: "Competências",
    frontendSkillsTitle: "Frontend",
    othersSkillsTitle: "Outros",
    contactHeading: "Contato",
    contactParagraph:
      "Quer entrar em contato? Me contate em qualquer uma das plataformas.",
    downloadButton: "Baixe Meu Currículo",
    copyrightText: "© Direitos Autorais 2023 Horst Portfolio App",
  },
  de: {
    language: "Deutsch",
    myintro: "Hallo zusammen 👋, ich bin",
    myposition: "Ich bin ein Frontend-Entwickler",
    headerName: "Horst",
    projectsHeading: "Projekte",
    projectsCard1Title: "Guess My Number App",
    projectsCard1Description:
      "Dies ist eine App, die mit Vanilla JavaScript erstellt wurde. Sie ermöglicht es den Benutzern, die richtige Zahl zu erraten!",
    projectsCard2Title: "Zitat des Tages",
    projectsCard2Description:
      "Dies ist eine App, die mit Vanilla JavaScript erstellt wurde. Sie zeigt ein zufälliges Zitat und den Autor an!",
    skillsHeading: "Fähigkeiten",
    frontendSkillsTitle: "Frontend",
    othersSkillsTitle: "Andere",
    contactHeading: "Kontakt",
    contactParagraph:
      "Möchten Sie in Kontakt treten? Kontaktieren Sie mich über eine der Plattformen.",
    downloadButton: "Laden Sie meinen Lebenslauf herunter",
    copyrightText: "© Urheberrecht 2023 Horst Portfolio App",
  },
  es: {
    language: "Español",
    myintro: "¡Hola! 👋, Soy",
    myposition: "Soy un Desarrollador Frontend",
    headerName: "Horst",
    projectsHeading: "Proyectos",
    projectsCard1Title: "Aplicación Adivina Mi Número",
    projectsCard1Description:
      "Esta es una aplicación creada con Vanilla JavaScript. ¡Permite a los usuarios adivinar el número correcto!",
    projectsCard2Title: "Cita del Día",
    projectsCard2Description:
      "Esta es una aplicación creada con Vanilla JavaScript. ¡Muestra una cita aleatoria y su autor!",
    skillsHeading: "Habilidades",
    frontendSkillsTitle: "Frontend",
    othersSkillsTitle: "Otras",
    contactHeading: "Contacto",
    contactParagraph:
      "¿Quieres ponerte en contacto? Contáctame en cualquiera de las plataformas.",
    downloadButton: "Descargar Mi Currículum",
    copyrightText: "© Derechos de Autor 2023 Aplicación de Portafolio de Horst",
  },
};

function updateLanguageUI() {
  // Set language button text with language name and caret icon
  const languageBtn = document.getElementById("languageBtn");
  languageBtn.textContent = languageData[currentLanguage].language;
  languageBtn.innerHTML += '<i class="fas fa-caret-down"></i>';

  // Set other elements based on the selected language
  document.querySelector(".intro-text").textContent =
    languageData[currentLanguage].myintro;
  document.querySelector(".my-position").textContent =
    languageData[currentLanguage].myposition;
  document.querySelector(".header-name").textContent =
    languageData[currentLanguage].headerName;
  document.querySelector("#project-heading").textContent =
    languageData[currentLanguage].projectsHeading;
  document.querySelectorAll(".project-card-content h3")[0].textContent =
    languageData[currentLanguage].projectsCard1Title;
  document.querySelectorAll(".project-card-content p")[0].textContent =
    languageData[currentLanguage].projectsCard1Description;
  document.querySelectorAll(".project-card-content h3")[1].textContent =
    languageData[currentLanguage].projectsCard2Title;
  document.querySelectorAll(".project-card-content p")[1].textContent =
    languageData[currentLanguage].projectsCard2Description;
  document.querySelectorAll(".project-card-content h3")[2].textContent =
    languageData[currentLanguage].projectsCard3Title;
  document.querySelectorAll(".project-card-content p")[2].textContent =
    languageData[currentLanguage].projectsCard3Description;
  document.querySelectorAll(".project-card-content h3")[3].textContent =
    languageData[currentLanguage].projectsCard4Title;
  document.querySelectorAll(".project-card-content p")[3].textContent =
    languageData[currentLanguage].projectsCard4Description;
  document.querySelectorAll(".project-card-content h3")[4].textContent =
    languageData[currentLanguage].projectsCard5Title;
  document.querySelectorAll(".project-card-content p")[4].textContent =
    languageData[currentLanguage].projectsCard5Description;
  document.querySelector("#skills-heading").textContent =
    languageData[currentLanguage].skillsHeading;
  document.querySelectorAll(".skills-details h3")[0].textContent =
    languageData[currentLanguage].frontendSkillsTitle;
  document.querySelectorAll(".skills-details h3")[1].textContent =
    languageData[currentLanguage].othersSkillsTitle;
  document.querySelector("#contact-heading").textContent =
    languageData[currentLanguage].contactHeading;
  document.querySelector(".contact-para").textContent =
    languageData[currentLanguage].contactParagraph;
  document.querySelector("#download-btn").textContent =
    languageData[currentLanguage].downloadButton;
  document.querySelector(".copyright-text").textContent =
    languageData[currentLanguage].copyrightText;
}

function changeLanguage(language) {
  currentLanguage = language;
  updateLanguageUI();
}

// Function to toggle the responsive class for the navigation menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("responsive");
}

// Initialize the UI with the default language (English)
document.addEventListener("DOMContentLoaded", () => {
  updateLanguageUI();
  // Event listener for hamburger menu click
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", toggleMenu);
});
